import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  isLogged  = new BehaviorSubject(this.getLogged());

  constructor(private http:HttpClient) { }

  loginUser$(user): Observable<any>{
    const url_api = 'api/users/login';
    return this.http
      .post<User>(url_api,user,{headers: this.headers})
      .pipe(tap(data =>{
        localStorage.setItem('isLogged','true');
        this.isLogged.next(true);
        return data;
      }), catchError(error=> {console.error(error);
                     return throwError(error);}))

  }

  setToken(token):void{
    localStorage.setItem('accessToken',token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  getLogged():boolean{
    if(localStorage.getItem('isLogged')==='true') {
      return true;
    } else{
      return false;
    }
  }

  logout(){
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLogged','false');
    this.isLogged.next(false);
  }

  //eval(localStorage.getItem('isLogged'))
  //return Boolean(string)
}
