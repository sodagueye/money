import { User } from './../models/user';
import { environment } from 'src/environments/environment';

import { Injectable, Component } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http : HttpClient
  ) { 
    this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
  }
  login(user:User)
  {
 return this.http.post<User>(`${environment.apiUrl}/login_check`,user).pipe(
   map(user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    return user;
   })
 );
  }
  public get currentUserValue(): User
   {

    return this.currentUserSubject.value;
}
}