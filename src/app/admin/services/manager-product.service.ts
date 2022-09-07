import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';
@Injectable({
  providedIn: 'root'
})
export class ManagerProductService {
  public API: string = 'http://localhost:3000/product';
  constructor(
    public http: HttpClient
  ) {  
  }
  getAllProduct(): Observable<any>{
    return this.http.get(this.API);
  }
  getAllProductByID(id:number):Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }
  addProduct(product: Product): Observable<any>{
    return this.http.post(this.API, product);
  }
  updateProduct(id: number, product: Product): Observable<any>{
    return this.http.put(`${this.API}/`+id,product);
  }
  onDelete(id: number):Observable<any>{
    return this.http.delete(`${this.API}/${id}`);
  }
  handlerror(err: { error: { message: any; }; status: any; }){
    if(err.error instanceof Error){
      console.log(`Client side error: ${err.error.message}`);
    }
    else{
      console.log(`Server side error: ${err.status} - ${err.error}`);
    }

  }
}
