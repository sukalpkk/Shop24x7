import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegistrationFormData } from '../models/registrationform.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationformService {

  constructor(private http:HttpClient) { }

  public postReactiveUsers(formdata:IRegistrationFormData):Observable<IRegistrationFormData>{

    return this.http.post<IRegistrationFormData>('http://localhost:3000/users',formdata)
  }

}

