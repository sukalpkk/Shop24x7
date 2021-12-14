import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems:any[];
  constructor() { 
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.initializeCartItems();
  }

  initializeCartItems() {
    this.cartItems = [{
      name:"ItemA",
      price:100,
      discount:10,
    },
    {
      name:"ItemB",
      price:200,
      discount:20,
    },
    {
      name:"ItemC",
      price:300,
      discount:30,
    },]
  }

  public removeCartItem(index:any):void{
    this.cartItems.splice(index,1);
  }

  public getTotal():any{
    let total = 0;
    this.cartItems.forEach(item=>{
      total += item.price;
    });
    return total;
  }

}

interface ICartItems{
  name:String;
  price:number;
  discount:number;
}
