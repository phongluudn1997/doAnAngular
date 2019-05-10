import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  server: string = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  getProductDetail(id: string): Observable<Product> {
    return this.http.get<Product>(`http://shop-service.j.layershift.co.uk/api/product/view/${id}`);
  }

  getAllProductsByCategory(id_Cat: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://shop-service.j.layershift.co.uk/api/product/category/${id_Cat}`);
  }

  getNewProducts() {
    return this.http.get('http://shop-service.j.layershift.co.uk/api/product/view/top')
  }

  getTopProducts(){
    return this.http.get('http://shop-service.j.layershift.co.uk/api/product/view/top-buy')
  }

}
