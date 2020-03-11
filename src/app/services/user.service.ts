import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Http :HttpClient
  ) { }
  register(data :any){
    return this.Http.post<any>(`${environment.apiUrl}/api/users`, data)}
}
//findAll(){
  //return this.http.get(`${environment.apiUrl}/api/lister`)
//}