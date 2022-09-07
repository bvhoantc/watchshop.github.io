import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.class';

@Injectable({
  providedIn: 'root'
})
export class ManagerCategoryService {

  public API: string = 'http://localhost:3000/category';
  constructor(
    public http: HttpClient
  ) { }
  getAllCategory(): Observable<any>{
    return this.http.get(this.API);
  }
  getAllCategoryByID(id:number):Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }
  addCategory(category: Category): Observable<any>{
    return this.http.post(this.API, category);
  }
  updateCategory(id: number, category: Category): Observable<any>{
    return this.http.put(`${this.API}/`+id,category);
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
