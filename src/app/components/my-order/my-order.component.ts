import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
  orders: any;
  p: number = 1;
  constructor(
    private orderService: OrderServiceService,
    private authService: AuthenticationService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.orderService.getOrderOfUser().subscribe(next => {
      this.spinner.hide();
      this.orders = next;
      console.log(this.orders)
    }, err => {
      this.spinner.hide();
      console.log(err)
    })
  }

}
