import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

 
  public allOrders:any[];
  constructor(private authenticationService:AuthenticationService, private orderService:OrderService) { 
    this.allOrders = [];
  }

  ngOnInit(): void {
    this.initializeCartItems();
  }

  initializeCartItems() {
    let user = this.authenticationService.currentUser;
    this.orderService.getOrders(user).subscribe(result=>{
      this.allOrders=result;

    },(err)=>{console.log(err) })

  }

  public getDetails(index:number){
    
  }

}
