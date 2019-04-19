import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customers } from '../models/Customers';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000/customers";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customers[]>{
    return this.http.get<Customers[]>(apiUrl);
  }

  getCustomerDetails(id: number): Observable<Customers>{
    return this.http.get<Customers>(`${apiUrl}/${id}`);
  }

  deleteCustomers(id: number): Observable<Customers>{
    return this.http.delete<Customers>(`${apiUrl}/${id}`);
  } 

  addCustomer(customer): Observable<Customers>{
    return this.http.post<Customers>(apiUrl, customer, httpOptions);
  }
}
