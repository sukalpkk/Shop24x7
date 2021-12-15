import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductPrice } from 'src/app/directives/product-price.validator';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { AdminAddNewProductService } from 'src/app/services/admin-add-new-product.service';
@Component({
  selector: 'app-admin-add-new-product',
  templateUrl: './admin-add-new-product.component.html',
  styleUrls: ['./admin-add-new-product.component.css']
})
export class AdminAddNewProductComponent implements OnInit {

  public adminAddNewProductForm:FormGroup;
  public isadminAddNewProductFormSubmitted:boolean;
  public productDetails:any;

  constructor(private formBuilder: FormBuilder,private adminAddNewProduct: AdminAddNewProductService,private router:Router) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.productDetails = {}

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
    if(this.adminAddNewProductForm.valid){
      this.productDetails = this.adminAddNewProductForm.getRawValue();
      this.adminAddNewProduct.addNewProduct(this.productDetails).subscribe((response):any=>{
        this.adminAddNewProductForm.reset();
      })
    }else{
      alert("Enter all Fields")
    }
    
  }


}
