import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private HttpClient: HttpClient) {
  }
  public recuperarUser(): Observable<any> {

    return this.HttpClient.get<any>('http://localhost:8080/engine-rest/user');
  }



}
