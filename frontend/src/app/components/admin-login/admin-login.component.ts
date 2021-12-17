import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin = new Admin();
  adminList:any=[];
  success:boolean = false;

  constructor(private _httpClient:HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._httpClient.get('http://localhost:8080/admin/admins').subscribe(
      (result)=>{
        this.adminList=result;

        this._router.navigate(['/admin'])

        if(this.success==false){
          alert('Please Enter Correct Details')
        }
      },
      (error)=>{
        console.log(error)
      },
    )
  }
  public onSubmit(){
    this._router.navigate(['/admin'])
  }
}
