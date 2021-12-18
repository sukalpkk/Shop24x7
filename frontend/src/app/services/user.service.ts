import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient ) { }

  public getProfile(email:String):Observable<IUser>{
    return this.http.post<IUser>('http://localhost:8080/users/profiledetails',email);
  }

  public updateProfile(data:any){
    return this.http.post('http://localhost:8080/users/profile',data);
  }
}
