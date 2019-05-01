import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  server: string = 'http://shop-bkdn.j.layershift.co.uk/api/product';

  constructor(private http: HttpClient) { }

  getProductDetail(id: string):Observable<Product>{
    return this.http.get<Product>(`${this.server}/${id}`);
  }

  getAllProductsByCategory(id_Cat: string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.server}/category/${id_Cat}`);
  }
}
