import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import { IOrders } from 'src/app/models/order.model';

@Component({
  selector: 'app-admin-manage-orders',
  templateUrl: './admin-manage-orders.component.html',
  styleUrls: ['./admin-manage-orders.component.css']
})
export class AdminManageOrdersComponent implements OnInit {

  public allOrders:any[];
  constructor(private authenticationService:AuthenticationService, private orderService:OrderService) { 
    this.allOrders = [];
  }

  ngOnInit(): void {
    this.initializeCartItems();
  }

  initializeCartItems() {
    this.orderService.getAllOrders().subscribe((result:IOrders[])=>{
      this.allOrders=result;

    },(err)=>{console.log(err) })

  }

  public deleteOrder(index:any):void{
    this.allOrders.splice(index,1);
  }

  public processOrder(index:any):void{
    //process order
  }


}
