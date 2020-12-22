<<<<<<< HEAD
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
=======
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';


>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD

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
=======
  // private authURL = environment.API_URL;
  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged());

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

/*   registerUser(name: string, email: string, password: string) {
    //const url_api = 'http://localhost:3000/register';
    this.authURL += 'register';
    return this.http
      .post<UserInterface>(
        this.authURL,
        {
          name,
          email,
          password
        },
        { headers: this.headers }
      )
      .pipe(tap(data => data),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }
 */
  loginuser$(user): Observable<any> {
    const url_api = 'api/users/login';
    // this.authURL += 'login';
    return this.http
      .post<User>(
        // this.authURL,
        url_api,
        user,
        { headers: this.headers }
      )
      .pipe(tap(data => {
        localStorage.setItem('isLogged','true');
        this.isLogged.next(true);
        return data}),
      catchError(error => {console.log(error);
                           return throwError(error); }));
  }

/*   setUser(user: UserInterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  } */

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (!(accessToken === undefined || accessToken === null)) {
      return accessToken;
    } else {
      return null;
    }

  }

/*   getCurrentUser(): UserInterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
 */
  logoutUser() {
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLogged','false');
    this.isLogged.next(false);
  }

<<<<<<< HEAD
  //eval(localStorage.getItem('isLogged'))
  //return Boolean(string)
=======
  getLogged():boolean{
    if(localStorage.getItem('isLogged')==='true'){
      return true;
    }else {return false};

    /* localStorage.set Item("isLogged", this.user.username);
    this.userType.next(this.user.username);
    this._router.navigate(['/Admin']);
    return true; */
   }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
