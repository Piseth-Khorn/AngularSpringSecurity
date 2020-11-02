import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retryWhen } from 'rxjs/operators';

export class User {
  id: number;
  name: string;
  password: string;
  role: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiKey = 'http://localhost:8080/api/v1/user';
  httpheaders = new HttpHeaders().set("Authorization", localStorage.getItem("Authorization"))
  constructor(private _httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this._httpClient.get<any>(`${this.apiKey}`, { headers: this.httpheaders });
  }

  save(fb): Observable<any> {
    return this._httpClient.post<any>(`${this.apiKey}`, fb, { headers: this.httpheaders });
  }

  deleteUser(id: string): Observable<any> {
    return this._httpClient.delete<any>(`${this.apiKey}/${id}`, { headers: this.httpheaders });
  }
}
