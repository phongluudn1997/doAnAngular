import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  server : string = 'http://localhost:3000/api/orders';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  order(order){
    return this.http.post(`${this.server}`, order, this.httpOptions);
  }

  getOrderOfUser(_id){
    return this.http.get(`${this.server}/user/${_id}`)
  }

  getOrderById(_id){
    return this.http.get(`${this.server}/${_id}`)
  }

}
