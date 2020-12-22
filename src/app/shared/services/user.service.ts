import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private authService: AuthService, private http: HttpClient) {
/*     let token = this.authService.getToken();
    this.headers?.append("Authorization", `Bearer ${token}`)
 */
  }


  register$(user: User): Observable<any> {
    user.id='2';
    const url_api = 'api/users/register';
    // this.authURL += 'login';
    return this.http
      .post<User>(
        // this.authURL,
        url_api,
        user);
  }

  getById$(id:string): Observable<any> {
    // console.log(this.headers)
    return this.http.get<User>('api/users/'+ id,{headers: {'Authorization': 'Bearer '+ this.authService.getToken()} });
  }

}
