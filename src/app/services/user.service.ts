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

  getUserInfo(id:string){
    return this.http.get<any>(`${this.server}/${id}`);
  }

  updateUserInfo(user){
    return this.http.put<any>(`${this.server}/update`, user, httpOptions);
  }
}
