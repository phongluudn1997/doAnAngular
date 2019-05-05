import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  server : string = 'http://localhost:3000/api/cart'

  constructor(
    private http: HttpClient
  ) { }


  addProduct(body){
    return this.http.post(`${this.server}/add`, body, this.httpOptions);
  }

  getCartOfUser(){
    return this.http.get(`${this.server}`);
  }

  updateProduct(_idProduct, quantity){
    return this.http.post(`${this.server}/update`, {_idProduct: _idProduct, quantity: quantity}, this.httpOptions);
  }

  deleteProduct(_idProduct){
    return this.http.post(`${this.server}/delete`, ({_idProduct: _idProduct}), this.httpOptions);
  }

  clearCart(){
    return this.http.get(`${this.server}/clear`)
  }
}
