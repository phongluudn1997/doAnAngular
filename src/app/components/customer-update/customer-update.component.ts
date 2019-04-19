import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private http: AuthenticationService) { }

  ngOnInit() {
    this.http.getUpdate().subscribe(next=>{
      console.log(next);
    },
    error=>{
      if (error instanceof HttpErrorResponse){
        if( error.status === 401 ){
          console.log('render to login page')
        }
      }
    }
    )
  }

}
