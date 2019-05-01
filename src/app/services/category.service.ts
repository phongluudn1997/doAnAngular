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
  server: string = 'http://shop-bkdn.j.layershift.co.uk/api/category';
  constructor(private http: HttpClient) { }

  getCatList(){
    return this.http.get<any>(`${this.server}/all`);
  }
}
