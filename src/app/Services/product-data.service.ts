import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }
  // getCetegory()
  // {
  //   return this.http.get('https://localhost:44337/api/Product/GetAllCategory');
  // }
  private apiUrl = 'https://localhost:44337/api/Product/GetAllCategory';
  
  getCetegory(): Observable<any> {
    const url=`${this.apiUrl}`;
    return this.http.get(url);
    
  }
}
