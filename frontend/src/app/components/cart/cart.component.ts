import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AlertService } from 'src/app/services/alert.service';
import { ILoginResponse } from 'src/app/models/loginform.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems:any[];
  constructor( private cartService: CartService, private alertService:AlertService) { 
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.initializeCartItems();
  }

  initializeCartItems() {
    this.cartItems=this.cartService.getItems();

    // this.cartItems = [{
    //   name:"ItemA",
    //   price:100,
    //   discount:10,
    // },
    // {
    //   name:"ItemB",
    //   price:200,
    //   discount:20,
    // },
    // {
    //   name:"ItemC",
    //   price:300,
    //   discount:30,
    // },]
  }

  public removeCartItem(index:any):void{
    this.cartService.deleteItem(index);
  }

  public getTotal():any{
    return this.cartService.getTotal();
    // let total = 0;
    // this.cartItems.forEach(item=>{
    //   total += item.price;
    // });
    // return total;
  }

}

interface ICartItems{
  name:String;
  price:number;
  discount:number;
}
