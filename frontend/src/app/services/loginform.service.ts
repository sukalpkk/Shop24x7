import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../models/loginform.model';

@Injectable({
  providedIn: 'root'
})
export class LoginformService {

  constructor(private http:HttpClient) { }

  
  public getUserDetails():Observable<ILoginResponse>{
    return this.http.get<ILoginResponse>('http://localhost:3000/login?email=’’”&password=””')
  }


  public postReactiveUsers(formdata:ILoginResponse):Observable<ILoginResponse>{

    return this.http.post<ILoginResponse>('http://localhost:3000/users',formdata)
  }
}


