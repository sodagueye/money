import { User } from './../models/user';
import { environment } from 'src/environments/environment';

import { Injectable, Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http : HttpClient
  ) { }
  login(user:User)
  {
 return this.http.post<User>(`${environment.apiUrl}/login_check`,user);
  }
}
