import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { ProductPrice } from 'src/app/directives/product-price.validator';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { AddNewProductService } from 'src/app/services/add-new-product.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

=======
import { Router } from '@angular/router';
import { ProductPrice } from 'src/app/directives/product-price.validator';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { AdminAddNewProductService } from 'src/app/services/admin-add-new-product.service';
>>>>>>> main
@Component({
  selector: 'app-admin-add-new-product',
  templateUrl: './admin-add-new-product.component.html',
  styleUrls: ['./admin-add-new-product.component.css']
})
export class AdminAddNewProductComponent implements OnInit {

  public adminAddNewProductForm:FormGroup;
  public isadminAddNewProductFormSubmitted:boolean;
<<<<<<< HEAD
  public addProductDetail: any;

  constructor(private formBuilder: FormBuilder, private addProductService:AddNewProductService,private alertService: AlertService,private router: Router,
    ) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.addProductDetail={};
=======
  public productDetails:any;

  constructor(private formBuilder: FormBuilder,private adminAddNewProduct: AdminAddNewProductService,private router:Router) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.productDetails = {}
>>>>>>> main

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
    },{
      validator: ReactiveMustMatch('price','discountprice')
    })
  }

  get adminFormControls(){
    return this.adminAddNewProductForm.controls;
  }

  public onSubmit():void{
    this.isadminAddNewProductFormSubmitted = true;
<<<<<<< HEAD

    if (this.adminAddNewProductForm.invalid) {
      return;
    }

    if (this.adminAddNewProductForm.valid) {
      console.log('form submitted');
      this.addProductDetail = this.adminAddNewProductForm.getRawValue();
      this.addProductService.addProduct(this.addProductDetail).pipe(first())
      .subscribe(
        data => {

          this.alertService.success('Product Added Successfully', true);
          
        },
        error => {
          this.alertService.error(error);
        });
    
  }

  }
=======
    if(this.adminAddNewProductForm.valid){
      this.productDetails = this.adminAddNewProductForm.getRawValue();
      this.adminAddNewProduct.addNewProduct(this.productDetails).subscribe((response):any=>{
        this.adminAddNewProductForm.reset();
      })
    }else{
      alert("Enter all Fields")
    }
    
  }


>>>>>>> main
}
