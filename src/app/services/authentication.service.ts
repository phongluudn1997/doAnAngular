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

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  server: string = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<any>(this.server + '/login', { email: email, password: password }, HttpOptions)
  }


  isLoggedIn(){
    return !!localStorage.getItem('token');
  //  if(localStorage.getItem('token') === null){
  //    return false;
  //  }
  //  return true
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
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
  }

  getUserInfo(id){
    return this.http.get(`${this.server}/${id}`)
  }

  getUpdate(){
    return this.http.get('http://localhost:3000/api');
  }
}

