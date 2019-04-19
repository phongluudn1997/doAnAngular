import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Customers } from 'src/app/models/Customers';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  data: Customers;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
    private messageService: MessagesService) { }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params['id']);
  }

  getCustomerDetails(id) {
    this.http.getCustomerDetails(id).subscribe(
      res => {
        this.data = res;
        console.log(this.data)
      }
    )
  }

  deleteCustomers(id) {
    this.http.deleteCustomers(id).subscribe(
      data => {
  
        this.router.navigate(['/list']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
