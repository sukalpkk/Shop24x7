import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAdminAddNewProduct } from '../models/admin-add-new-product.model';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  private currentUserSubject: any;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) { 
    const value: any = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject(JSON.parse(value));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}

public addProduct(data: any) {
  return this.http.post('http://localhost:8080/products/addProduct', data)
}

public addUser(data: any){
  console.log(data)
  return this.http.post('http://localhost:8080/adminUser/addUser', data)
}

}
