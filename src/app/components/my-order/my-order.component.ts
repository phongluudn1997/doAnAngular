import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  orders: any;
  constructor(
    private orderService: OrderServiceService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.orderService.getOrderOfUser(this.authService.getUserId()).subscribe(next => {
      this.orders = next['orders'];
      console.log(this.orders)
    }, err => {
      console.log(err)
    })
  }

}
