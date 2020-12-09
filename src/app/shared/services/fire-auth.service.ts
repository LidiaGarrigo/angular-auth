import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private afAuth:AngularFireAuth) { }

  login(user:User){
    return this.afAuth.signInWithEmailAndPassword(user.email,user.password);
  }

  register(user:User): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  isLogged$(): Observable<any>{
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.signOut();
  }
}
