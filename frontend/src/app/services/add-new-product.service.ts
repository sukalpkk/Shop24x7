import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminAddNewProduct } from '../models/admin-add-new-product.model';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {

  constructor(private http: HttpClient) { }

  public addProduct(formdata: IAdminAddNewProduct): Observable<IAdminAddNewProduct>{
    return this.http.post<IAdminAddNewProduct>('http://localhost:8080/products/save',formdata)

  }
}
