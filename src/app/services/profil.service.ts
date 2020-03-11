import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private Http :HttpClient
  ) { }
  getProfil()
  {
    return this.Http.get(`${environment.apiUrl}/api/profils.json`);
  }
}
