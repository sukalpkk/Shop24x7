import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient ) { }

  public getProfile(email:string){
    return this.http.post('http://localhost:8080/users/profiledetails',email);
  }

  public updateProfile(data:any){
    return this.http.post('http://localhost:8080/users/profile',data);
  }
}
