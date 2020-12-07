import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from '../models';
@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(user:User) {
    return this.afAuth.signInWithEmailAndPassword(user.email, user.password);
}
  logout(){
    this.afAuth.signOut();
  }
}
