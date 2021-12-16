import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationformService } from 'src/app/services/registerform.service';
import { ReactiveMustMatch } from 'src/app/shared/confirm-equal-validator';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public user: any;
  public loading = false;
  public isUserFormSubmitted: boolean;
  constructor(private formBuilder: FormBuilder, private registrationformService: RegistrationformService,
    private router: Router, private authenticationService: AuthenticationService,
    private alertService: AlertService) {
    this.userForm = {} as FormGroup;
    this.user = {}
    this.isUserFormSubmitted = false;
  }

  public ngOnInit(): void {
    this.initializeUserForm();
  }

  public initializeUserForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', [Validators.required]]
    }, {
      validator: ReactiveMustMatch('password', 'confirmpassword')
    })
  }

  // public onSubmit(): void {
  //   this.isUserFormSubmitted = true;
  //   this.user = this.userForm.getRawValue();
  //   this.registrationformService.postReactiveUsers(this.user).subscribe((response): any => {
  //     console.log(response, "reactive form")
  //   })
  //   if (this.userForm.valid) {

  //     alert("Registration successful");
  //     this.router.navigateByUrl('/login');
  //   }
  //   else {
  //     //alert("Invalid details. Please try again!")
  //     this.router.navigateByUrl('/register');
  //   }
  // }

  get userFormControls() {
    return this.userForm.controls;
  }

  public onSubmit() {
    this.isUserFormSubmitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.register(this.userForm.getRawValue()).pipe(first())
      .subscribe(
        data => {

          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
}

}

