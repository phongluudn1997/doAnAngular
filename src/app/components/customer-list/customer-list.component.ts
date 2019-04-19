import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service'
import { Customers } from '../../models/Customers';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // Message
  messages: any[] = [];
  subscription: Subscription;

  customersObservable: Customers[];

  constructor(private data: HttpService, private messageService: MessagesService) {
    
  }

  ngOnInit() {
    this.data.getCustomers().subscribe(
      data => {
        this.customersObservable = data;
        console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
