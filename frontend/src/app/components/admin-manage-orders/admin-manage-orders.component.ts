import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css']
})
export class AdminManageOrdersComponent implements OnInit {

  public allOrders:any[];
  constructor() { 
    this.allOrders = [];
  }

  ngOnInit(): void {
    this.initializeCartItems();
  }

  initializeCartItems() {
    this.allOrders = [{
      orderId:"123",
      user:"userA@gmail.com",
    },
    {
      orderId:"456",
      user:"userB@gmail.com",
    },
    {
      orderId:"789",
      user:"userC@gmail.com",
    },]
  }

  public deleteOrder(index:any):void{
    this.allOrders.splice(index,1);
  }

  public processOrder(index:any):void{
    //process order
  }


}
