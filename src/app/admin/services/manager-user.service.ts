import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';
@Injectable({
  providedIn: 'root'
})
export class ManagerUserService {

  public API: string = 'http://localhost:3000/user';
  constructor(
    public http: HttpClient
  ) { }
  getAllUser(): Observable<any>{
    return this.http.get(this.API);
  }
  getAllUserByID(id:number):Observable<any>{
    return this.http.get(`${this.API}/${id}`);
  }
  addUser(user: User): Observable<any>{
    return this.http.post(this.API, user);
  }
  updateUser(id: number, user: User): Observable<any>{
    return this.http.put(`${this.API}/`+id,user);
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
