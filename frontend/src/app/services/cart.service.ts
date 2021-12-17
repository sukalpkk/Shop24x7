import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductDetails } from '../models/productdetails.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : ProductDetails[] = [];

  constructor() {
    if (sessionStorage.getItem('cart') !== null){
      console.log("cart found in sessionStorage")
      this.cartItems = <ProductDetails []> JSON.parse(sessionStorage.getItem('cart') ||'{}');

    } else {
      console.log("no cart found in sessionStorage. Making a new one...")
    }
  }

  addToCart(product : ProductDetails){
    this.cartItems.push(product)
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems))
  }

  getItems() {
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
    sessionStorage.removeItem('cart')
    return this.cartItems;
    
  }

  getTotal() {
    return this.cartItems.reduce((acc, curr) => acc + +curr.price, 0)
  }

  placeOrder() {

  }

}
