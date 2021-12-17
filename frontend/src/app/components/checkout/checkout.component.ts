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
  public checkoutForm : FormGroup ;
  public userAddress:any;
  public isUserAddressEditable:boolean;
  public isCheckoutFormSubmitted:boolean;
  public user:IUser;

  constructor(private formBuilder: FormBuilder, private orderService:OrderService, private httpClient:HttpClient, private cartService:CartService, private router:Router, private authenticationService: AuthenticationService, private userService:UserService) { 
    this.checkoutForm = {} as FormGroup;
    this.userAddress = {}
    this.isUserAddressEditable = false;
    this.isCheckoutFormSubmitted = false;
    this.user = {} as IUser;

  }

  public ngOnInit(): void {
    this.initializeCheckoutForm();
    
    this.user=this.authenticationService.currentUserValue;

    if (this.user != {} as IUser){

      
      this.userService.getProfile("this.user.email").subscribe((result:IUser)=>{

      this.user=result;
      
    },error=>{
      console.log(error);

    })
  } else {
    alert('Please log in.');
    this.router.navigate(['/login']);
  }

  }

  public initializeCheckoutForm(){
    this.checkoutForm = this.formBuilder.group({
      firstname:[this.user.firstname||'',[Validators.required]],
      lastname:[this.user.lastname||'',[Validators.required]],
      email:[this.user.email||'',[Validators.required,Validators.email]],
      streetAddress:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      zipCode:['',[Validators.required]],
    })
  }

  get checkoutFormControls(){
    return this.checkoutForm.controls;
  }

  public onPlaceOrder():void{
    this.isCheckoutFormSubmitted = true;
    this.user = this.checkoutForm.getRawValue();
    //this.profile.address = this.shippingAddressForm.getRawValue();
    this.isUserAddressEditable = false;


    if(this.checkoutForm.valid){

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
    
      console.log("OOORRRDDERR")

      this.orderService.postOrders(order).subscribe(result=>{
        alert(result);
        this.cartService.clearCart();
        this.router.navigate(['/order']);

      },(err)=>{console.log(err)
        this.router.navigate(['/order']);
       })

    }
    // this.userformService.postReactiveUsers(this.userProfile).subscribe((response):any=>{
    //   console.log(response,"reactive form")
    // })
  }

}
