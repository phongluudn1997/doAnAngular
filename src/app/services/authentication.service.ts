import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  server: string = 'http://shop-bkdn.j.layershift.co.uk/api';
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.server + '/login', { username: username, password: password }, HttpOptions)
  }


  isLoggedIn(){
   // return !!localStorage.getItem('token');
   return localStorage.getItem('userId')
  }
  
  loginTest(user){
    return this.http.post<any>('http://localhost:3000' + '/api/users/login', user, HttpOptions);
  }

  register(user){
    return this.http.post<any>(this.server + 'account/register', user, HttpOptions);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  logout(){
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/')
  }

  getUpdate(){
    return this.http.get('http://localhost:3000/api');
  }
}

