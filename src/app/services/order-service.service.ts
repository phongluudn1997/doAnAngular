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
    return this.http.post(`http://shop-service.j.layershift.co.uk/api/transaction/add`, order, this.httpOptions);
  }

  getOrderOfUser(){
    return this.http.get(`http://shop-service.j.layershift.co.uk/api/transaction/customer`)
  }

  getOrderById(_id){
    return this.http.get(`http://shop-service.j.layershift.co.uk/api/transaction/customer/${_id}`)
  }

}
