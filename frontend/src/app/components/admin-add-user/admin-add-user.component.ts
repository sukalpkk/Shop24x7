import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewProductService } from 'src/app/services/add-new-product.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css']
})
export class AdminAddUserComponent implements OnInit {

  public adminAddNewUserForm:FormGroup;
  public isadminAddNewUserFormSubmitted:boolean;

  constructor(private formBuilder: FormBuilder,private addProductService:AddNewProductService,private router: Router) { 
    this.adminAddNewUserForm = {} as FormGroup;
    this.isadminAddNewUserFormSubmitted = false;

  }

  public ngOnInit(): void {
    this.initialize();
  }

  public initialize(){
    this.adminAddNewUserForm = this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  get adminFormControls(){
    return this.adminAddNewUserForm.controls;
  }

  public onSubmit():void{
    this.isadminAddNewUserFormSubmitted = true;

    if (this.adminAddNewUserForm.invalid) {
      return;
    }


    this.addProductService.addUser(this.adminAddNewUserForm.getRawValue()).pipe(first())
      .subscribe(
        data => {
          alert("User Added");
          this.router.navigate(['admin/editUser'])
        },
        error => {
          alert("User Not Added")
        });
  }
    
  

}
