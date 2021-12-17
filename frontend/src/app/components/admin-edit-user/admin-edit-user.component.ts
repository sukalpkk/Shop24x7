import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegistrationFormData } from 'src/app/models/registrationform.model';
import { RegistrationformService } from 'src/app/services/registerform.service';


@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  public userForm: FormGroup;
  public isUserFormSubmitted: boolean;
  public AllUserDetail:any;
  public UpdateUser: any;


  constructor(private http:HttpClient,private formBuilder: FormBuilder, private registrationformService: RegistrationformService,private router: Router) {
    this.userForm = {} as FormGroup;
    this.isUserFormSubmitted = false;
    this.AllUserDetail={};
    this.UpdateUser={};
  }

  public ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      register_first_name:['',[Validators.required]],
      register_last_name:['',[Validators.required]],
      register_email:['',[Validators.required]],
      register_password:['',[Validators.required]],
      id:[]
    })
    this.getAllUsers();
  }

  public getAllUsers(){
    this.http.get<IRegistrationFormData[]>('http://localhost:8080/adminUser/getAllUser').subscribe(result=>{
      this.AllUserDetail=result;
    }, error=>{
      console.log(error);
    })
  }

  public initializeUserForm() {
    
  }

  get userFormControls() {
    return this.userForm.controls;
  }
  
  public onSubmit():void{
    this.isUserFormSubmitted = true;
  }

  public edit(row:any){
    this.userForm.controls['id'].setValue(row._id);
    this.userForm.controls['register_first_name'].setValue(row.register_first_name);
    this.userForm.controls['register_last_name'].setValue(row.register_last_name);
    this.userForm.controls['register_email'].setValue(row.register_email);
    this.userForm.controls['register_password'].setValue(row.register_password);
  }

  public update(){
console.log(this.userForm.getRawValue() )
    this.http.post('http://localhost:8080/adminUser/update',this.userForm.getRawValue()).subscribe(result=>{

      alert("User Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.userForm.reset();
      this.getAllUsers();

    }, (error)=>{
      console.log(error);
    })

  }

  public delete(AllUserDetail:any){

    this.http.post('http://localhost:8080/adminUser/delete',AllUserDetail).subscribe(result=>{
      
      alert("User Deleted Successfully");
      this.getAllUsers();
    }, (error)=>{
      console.log(error);
    })
  }

}
