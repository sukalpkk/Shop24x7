import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginformService } from 'src/app/services/loginform.service';
import { ILoginFormData, ILoginResponse } from 'src/app/models/loginform.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm : FormGroup ;
  public user:any;
  public isUserFormSubmitted:boolean;
  public userDetails:ILoginFormData[];
  constructor(private loginformService:LoginformService,private router:Router,private formBuilder: FormBuilder) { 
    this.userForm = {} as FormGroup ;
    this.user = {}
    this.userDetails=[]
    this.isUserFormSubmitted = false;
  }

  public ngOnInit(): void {
    this.initializeUserForm();
    this.initializeUserForm1();
  }

  public initializeUserForm(){
    this.loginformService.getUserDetails().subscribe((response:ILoginResponse)=>{
      this.userDetails=response.details;
    })
  }
  public initializeUserForm1(){
    this.userForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  public onSubmit():void{
    this.isUserFormSubmitted = true;
    this.user = this.userForm.getRawValue();
    this.loginformService.postReactiveUsers(this.user).subscribe((response):any=>{
      console.log(response,"reactive form")
    })
    if(this.userForm.valid){
    alert("Login successful");
    this.router.navigateByUrl('/home');}
    else{
      this.router.navigateByUrl('/home');
    }
  }
  get userFormControls(){
    return this.userForm.controls;
  }


}


