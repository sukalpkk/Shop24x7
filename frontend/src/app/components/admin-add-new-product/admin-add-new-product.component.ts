import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductPrice } from 'src/app/directives/product-price.validator';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { AddNewProductService } from 'src/app/services/add-new-product.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-add-new-product',
  templateUrl: './admin-add-new-product.component.html',
  styleUrls: ['./admin-add-new-product.component.css']
})
export class AdminAddNewProductComponent implements OnInit {

  public adminAddNewProductForm:FormGroup;
  public isadminAddNewProductFormSubmitted:boolean;
  public addProductDetail: any;

  constructor(private formBuilder: FormBuilder, private _httpClient:HttpClient,private addProductService:AddNewProductService,private alertService: AlertService,private router: Router,
    ) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.addProductDetail={};

  }

  public ngOnInit(): void {
    this.initialize();
  }

  public initialize(){
    this.adminAddNewProductForm = this.formBuilder.group({
      productname:['',[Validators.required,Validators.maxLength(64)]],
      department:['',[Validators.required]],
      price:['',[Validators.required]],
      discountprice:['',[Validators.required]],
      productimage:['',[Validators.required]],
      productdescription:['',[Validators.required,Validators.minLength(20)]],
      checkbox:[false]
    },{
      validator: ReactiveMustMatch('price','discountprice')
    })
  }

  get adminFormControls(){
    return this.adminAddNewProductForm.controls;
  }

  public onSubmit():void{
    this.isadminAddNewProductFormSubmitted = true;

    if (this.adminAddNewProductForm.invalid) {
      return;
    }

  

    this.addProductService.addProduct(this.adminAddNewProductForm.getRawValue()).pipe(first())
      .subscribe(
        data => {
          alert("Product Added");
          this.router.navigate(['admin/products'])
        },
        error => {
          this.alertService.error(error);
        });

    
  }


  }
}
