import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationformService } from 'src/app/services/registerform.service';
import { ReactiveMustMatch } from 'src/app/shared/confirm-equal-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public user: any;
  public isUserFormSubmitted: boolean;
  constructor(private formBuilder: FormBuilder, private registrationformService: RegistrationformService,
    private router: Router) {
    this.userForm = {} as FormGroup;
    this.user = {}
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
      register_password: ['', [Validators.required, Validators.minLength(6)]],
      register_confirm_password: ['', [Validators.required]]
    }, {
      validator: ReactiveMustMatch('register_password', 'register_confirm_password')
    })
  }

  public onSubmit(): void {
    this.isUserFormSubmitted = true;
    this.user = this.userForm.getRawValue();
    this.registrationformService.postReactiveUsers(this.user).subscribe((response): any => {
      console.log(response, "reactive form")
    })
    if (this.userForm.valid) {

      alert("Registration successful");
      this.router.navigateByUrl('/login');
    }
    else {
      //alert("Invalid details. Please try again!")
      this.router.navigateByUrl('/register');
    }
  }

  get userFormControls() {
    return this.userForm.controls;
  }

}

