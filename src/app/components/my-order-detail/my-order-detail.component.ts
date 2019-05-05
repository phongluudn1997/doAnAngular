import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-my-order-detail',
  templateUrl: './my-order-detail.component.html',
  styleUrls: ['./my-order-detail.component.css']
})
export class MyOrderDetailComponent implements OnInit {

  order: any;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orderService.getOrderById(this.route.snapshot.params['id']).subscribe(next=>{
      this.order = next['order']
      console.log(this.order)
    })
  }

}
