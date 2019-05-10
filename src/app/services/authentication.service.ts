import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

const HttpOptions2= {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  server: string = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<any>('http://shop-service.j.layershift.co.uk/api/login-customer', { username: email, password: password }, HttpOptions)
  }


  isLoggedIn(){
    return !!localStorage.getItem('token');
  //  if(localStorage.getItem('token') === null){
  //    return false;
  //  }
  //  return true
  }

  register(user){
    console.log(user)
    return this.http.post<any>('http://shop-service.j.layershift.co.uk/api/account/register', user, HttpOptions);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/')
  }

  getUserInfo(){
    return this.http.get(`http://shop-service.j.layershift.co.uk/api/account/current`)
  }

  getUpdate(){
    return this.http.get('http://localhost:3000/api');
  }
}

