import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  // Declare variables 
  customerForm: FormGroup;
  name: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  title: string;


  constructor(private http: HttpService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'city' : [null, Validators.required],
      'country' : [null, Validators.required],
      'title' : [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm){
    this.http.addCustomer(form).subscribe(
      res => {
        let id = res['id'];
        this.router.navigate(['/details', id]);
      },
      err => {
        console.log(err);
      }
    )
  }

}
