import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'apikey': 'nhadatdn'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  server: string = 'http://nhadatdn-api.herokuapp.com';
  constructor(private http: HttpClient) { }

  login(phone: string, pass: string) {
    return this.http.post<any>(this.server + '/user/login', { phoneNumber: phone, password: pass }, HttpOptions)
  }


  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  loginTest(user){
    return this.http.post<any>('http://localhost:3000' + '/api/users/login', user, HttpOptions);
  }

  register(user){
    return this.http.post<any>(this.server + 'user/register', user, HttpOptions);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  getUpdate(){
    return this.http.get('http://localhost:3000/api');
  }
}

