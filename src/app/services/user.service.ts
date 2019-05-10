import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  server: string = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }

  getUserInfo(){
    return this.http.get(`http://shop-service.j.layershift.co.uk/api/account/current`)
  }

  updateUserInfo(user){
    return this.http.put<any>(`http://shop-service.j.layershift.co.uk/api/account/edit`, user, httpOptions);
  }
}
