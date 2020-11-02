import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export class Auth {
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Api: string = 'http://localhost:8080';
  headers = new HttpHeaders().set(
    'access-token',
    localStorage.getItem('access-token')
  );

  constructor(private myRoute: Router, private http: HttpClient) { }

  authenticate(auth: Auth): Observable<any> {
    return this.http.post(`${this.Api}/api/auth`, auth);
  }

  getToken() {
    return localStorage.getItem("Authorization");
  }

  isLoggedIn() {
    return this.getToken();
  }
  logout() {
    localStorage.removeItem("Authorization");
    this.myRoute.navigate(["login"]);
  } n
}
