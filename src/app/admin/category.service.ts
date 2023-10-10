import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiUrl="https://localhost:44337/api/Product";
  apiUrl1="https://localhost:44337/api/Account";
  constructor(private http: HttpClient) { }

  addEditCategory(data:any):Observable<any>
  {
    debugger;  
    console.log("data",data);
    return this.http.post(this.apiUrl+"/AddEditCategory",data);
  }
  getCategory():Observable<any>
  {
    debugger;  
    //console.log("data",);
    return this.http.get(this.apiUrl+"/GetAllCategory");
  }

  addEditProduct(data:any):Observable<any>
  {
 
    debugger;
    console.log("data",data);
    return this.http.post(this.apiUrl+"/AddEditProduct",data);
  }
  
  getProduct():Observable<any>
  {
    debugger;  
    //console.log("data",);
    return this.http.get(this.apiUrl+"/GetAllProduct");
  }
  ProductDelete(ProductId:String):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    debugger; 
    return this.http.delete<number>(this.apiUrl+"/DeleteProduct?ProductId="+ProductId);
  }
  getUser(Vendor:string):Observable<any>
  {
    debugger;  
    //console.log("data",);
    return this.http.get(this.apiUrl1+"/getUsers?UserType="+Vendor);
  }
}


