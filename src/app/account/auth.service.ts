import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44337/api/Account";
  constructor(private http: HttpClient) { }

  UserLogin(data:any):Observable<any>
  {
    debugger;  
    console.log("data",data);
    return this.http.post(this.apiUrl+"/UserLogin",data);
  }
}
