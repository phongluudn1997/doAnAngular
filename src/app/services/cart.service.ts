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
    return this.http.post(`http://shop-service.j.layershift.co.uk/api/cart/add`, body, this.httpOptions);
  }

  getCartOfUser(){
    return this.http.get(`http://shop-service.j.layershift.co.uk/api/cart/customer`);
  }

  updateProduct(_idProduct, quantity){
    return this.http.put(`http://shop-service.j.layershift.co.uk/api/cart/update`, {id_product: _idProduct, quantity: quantity}, this.httpOptions);
  }

  deleteProduct(_idProduct){
    return this.http.post(`http://shop-service.j.layershift.co.uk/api/cart/delete`, ({id_product: _idProduct}), this.httpOptions)
  }

  updateCart(body){
    return this.http.put('http://shop-service.j.layershift.co.uk/api/cart/update', body, this.httpOptions)
  }

  clearCart(){
    return this.http.get(`${this.server}/clear`)
  }
}
