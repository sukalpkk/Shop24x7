import { Injectable } from '@angular/core';
import { IOrders } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  public postOrders(formdata:IOrders):Observable<IOrders>{
    return this.http.post<IOrders>('http://localhost:8080/order/orders',formdata)
  }

  public getOrders(user:any):Observable<IOrders[]>{
console.log("Test"+user);

    return this.http.get<IOrders[]>(`http://localhost:8080/order/orders?email=${user}`)
  }

  public getAllOrders():Observable<IOrders[]>{

    return this.http.get<IOrders[]>('http://localhost:8080/orders')
  }
}
