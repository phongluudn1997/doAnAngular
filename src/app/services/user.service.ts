import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  server: string = 'http://shop-bkdn.j.layershift.co.uk/api/account';
  constructor(private http: HttpClient) { }

  getUserInfo(id:string){
    return this.http.get<any>(`${this.server}/${id}`);
  }

  updateUserInfo(id: string, user: any){
    return this.http.put<any>(`${this.server}/${id}`, user, httpOptions);
  }
}
