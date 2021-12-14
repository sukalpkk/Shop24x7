import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationformService } from 'src/app/services/registerform.service';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  public userForm: FormGroup;
  public isUserFormSubmitted: boolean;


  constructor(private formBuilder: FormBuilder, private registrationformService: RegistrationformService,private router: Router) {
    this.userForm = {} as FormGroup;
    this.isUserFormSubmitted = false;
  }

  public ngOnInit(): void {
    this.initializeUserForm();
  }

  public initializeUserForm() {
    this.userForm = this.formBuilder.group({
      register_first_name: ['', [Validators.required]],
      register_last_name: ['', [Validators.required]],
      register_email: ['', [Validators.required, Validators.email]],
      register_password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get userFormControls() {
    return this.userForm.controls;
  }
  
  public onSubmit(): void {
    this.isUserFormSubmitted = true;

  }

}
