import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { IUser } from 'src/app/models/profile.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductDetails } from 'src/app/models/productdetails.model';
import { HttpClient } from '@angular/common/http';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public shippingAddressForm : FormGroup ;
  public checkoutForm : FormGroup ;
  public userAddress:any;
  public isUserAddressFormSubmitted:boolean;
  public isUserAddressEditable:boolean;
  public isCheckoutFormSubmitted:boolean;
  public user:IUser;

  constructor(private formBuilder: FormBuilder, private orderService:OrderService, private httpClient:HttpClient, private cartService:CartService, private router:Router, private authenticationService: AuthenticationService, private userService:UserService) { 
    this.shippingAddressForm = {} as FormGroup;
    this.checkoutForm = {} as FormGroup;
    this.userAddress = {}
    this.isUserAddressFormSubmitted = false;
    this.isUserAddressEditable = false;
    this.isCheckoutFormSubmitted = false;
    this.user = {} as IUser;

  }

  public ngOnInit(): void {
    this.user=this.authenticationService.currentUserValue;

    if (this.user != {} as IUser){

      
    //   this.userService.getUserById(this.id).subscribe(result=>{

    //   this.user=result;
    // },error=>{
    //   console.log(error);
    // })
  } else {
    alert('Please log in.');
    this.router.navigate(['/login']);
  }

    this.initializeCheckoutForm();
  }

  public initializeCheckoutForm(){
    this.checkoutForm = this.formBuilder.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required]],
      streetAdress:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required,Validators.email]],
      zip:['',[Validators.required]],
    })
  }

  get checkoutFormControls(){
    return this.checkoutForm.controls;
  }

  public onPlaceOrder():void{
    this.userService.updateProfile(this.user).subscribe(result=>{
      console.log(result)
    }, error=>{
      console.log(error)
    })

  
    let items:ProductDetails[] = this.cartService.getItems();
    let total = this.cartService.getTotal();
    let stringifiedCart:any = [];
    items.forEach((item) => {
      stringifiedCart.push(item.name);
    });


    let order:any = {"userEmail":this.authenticationService.currentUser, "items":stringifiedCart, "total":total}

    sessionStorage.removeItem('cart');
    this.cartService.clearCart();
  
    this.orderService.postOrders(order).subscribe(result=>{
      alert(result);
      this.router.navigate(['/orders']);

    },(err)=>{console.log(err) })

    this.isUserAddressFormSubmitted = true;
    this.userAddress = this.shippingAddressForm.getRawValue();
    //this.profile.address = this.shippingAddressForm.getRawValue();
    this.isUserAddressEditable = false;
    // this.userformService.postReactiveUsers(this.userProfile).subscribe((response):any=>{
    //   console.log(response,"reactive form")
    // })
  }

}
