import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { 
    this.shippingAddressForm = {} as FormGroup;
    this.checkoutForm = {} as FormGroup;
    this.userAddress = {}
    this.isUserAddressFormSubmitted = false;
    this.isUserAddressEditable = false;
    this.isCheckoutFormSubmitted = false;
  
  }

  public ngOnInit(): void {
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
    this.isUserAddressFormSubmitted = true;
    this.userAddress = this.shippingAddressForm.getRawValue();
    //this.profile.address = this.shippingAddressForm.getRawValue();
    this.isUserAddressEditable = false;
    // this.userformService.postReactiveUsers(this.userProfile).subscribe((response):any=>{
    //   console.log(response,"reactive form")
    // })
  }

}
