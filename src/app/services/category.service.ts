import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  server: string = 'http://localhost:3000/api/categories';
  constructor(private http: HttpClient) { }

  getCatList(){
    return this.http.get<any>(`http://shop-service.j.layershift.co.uk/api/category/view/all`);
  }
}
