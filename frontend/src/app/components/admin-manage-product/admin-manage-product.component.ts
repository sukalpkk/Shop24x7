import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveMustMatch } from 'src/app/directives/reactive-must-match.validator';
import { IAdminAddNewProduct } from 'src/app/models/admin-add-new-product.model';

@Component({
  selector: 'app-admin-manage-product',
  templateUrl: './admin-manage-product.component.html',
  styleUrls: ['./admin-manage-product.component.css']
})
export class AdminManageProductComponent implements OnInit {

  public adminAddNewProductForm:FormGroup;
  public isadminAddNewProductFormSubmitted:boolean;
  public productDetails: IAdminAddNewProduct[];
  public ProductDetail: any;
  public UpdateProduct: any;

  constructor(private http:HttpClient,private formBuilder: FormBuilder,private router: Router,private _route:ActivatedRoute,) { 
    this.adminAddNewProductForm = {} as FormGroup;
    this.isadminAddNewProductFormSubmitted = false;
    this.productDetails = [];
    this.ProductDetail={};
    this.UpdateProduct={};
  }

  public ngOnInit(): void {
    this.initialize();
    
    this.getAllProducts();

  }

  public getAllProducts(){
    this.http.get<IAdminAddNewProduct[]>('http://localhost:8080/products/getproducts').subscribe(result=>{
      this.ProductDetail=result;
    }, error=>{
      console.log(error);
    })
  }

  public initialize(){
    this.adminAddNewProductForm = this.formBuilder.group({
      productname:['',[Validators.required,Validators.maxLength(64)]],
      department:['',[Validators.required]],
      price:['',[Validators.required]],
      discountprice:['',[Validators.required]],
      productimage:['',[Validators.required]],
      productdescription:['',[Validators.required,Validators.minLength(20)]],
      checkbox:[false],
      id:[]
    },{
      validator: ReactiveMustMatch('price','discountprice')
    })

  }

  get adminFormControls(){
    return this.adminAddNewProductForm.controls;
  }

  public onSubmit():void{
    this.isadminAddNewProductFormSubmitted = true;
  }

  public edit(row: any){
    this.adminAddNewProductForm.controls['id'].setValue(row._id)
    this.adminAddNewProductForm.controls['productname'].setValue(row.productname);
    this.adminAddNewProductForm.controls['department'].setValue(row.department);
    this.adminAddNewProductForm.controls['price'].setValue(row.price);
    this.adminAddNewProductForm.controls['discountprice'].setValue(row.discountprice);
    this.adminAddNewProductForm.controls['productimage'].setValue(row.productimage);
    this.adminAddNewProductForm.controls['productdescription'].setValue(row.productdescription);
    this.adminAddNewProductForm.controls['checkbox'].setValue(row.checkbox);
  }

  public update(){

    this.UpdateProduct = this.adminAddNewProductForm.getRawValue();
    console.log(this.UpdateProduct)
    this.http.post('http://localhost:8080/products/update',this.UpdateProduct).subscribe(result=>{

      alert("Product Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.adminAddNewProductForm.reset();
      this.getAllProducts();

    }, (error)=>{
      console.log(error);
    })

  }

  public delete(productdelete:any){

    this.http.post('http://localhost:8080/products/delete',productdelete).subscribe(result=>{
      //alert("Product Deleted Successfully");
      this.getAllProducts();
    }, (error)=>{
      console.log(error);
    })
  }
}
