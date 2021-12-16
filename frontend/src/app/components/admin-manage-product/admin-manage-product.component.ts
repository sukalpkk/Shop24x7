import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
=======
import { Router } from '@angular/router';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { IAdminAddNewProduct } from 'src/app/models/admin-add-new-product.model';
>>>>>>> main

@Component({
  selector: 'app-admin-manage-product',
  templateUrl: './admin-manage-product.component.html',
  styleUrls: ['./admin-manage-product.component.css']
})
export class AdminManageProductComponent implements OnInit {

  public adminAddNewProductForm:FormGroup;
  public isadminAddNewProductFormSubmitted:boolean;
<<<<<<< HEAD

  constructor(private formBuilder: FormBuilder) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
=======
  public productDetails: IAdminAddNewProduct[];

  constructor(private formBuilder: FormBuilder,private router: Router) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.productDetails = [];
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
<<<<<<< HEAD
=======

    
>>>>>>> main
  }

  get adminFormControls(){
    return this.adminAddNewProductForm.controls;
  }

  public onSubmit():void{
    this.isadminAddNewProductFormSubmitted = true;
    
  }
}
