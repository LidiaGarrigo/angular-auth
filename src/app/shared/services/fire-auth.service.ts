<<<<<<< HEAD
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';

=======
import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../models';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

<<<<<<< HEAD
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
=======

  constructor(private afAuth: AngularFireAuth) {}

  login(user:User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
}
  logout(){
    this.afAuth.signOut();
  }

  register(user): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
  }

  isLogged$():Observable<any> {
    return this.afAuth.authState.pipe(first());
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
  }
}
