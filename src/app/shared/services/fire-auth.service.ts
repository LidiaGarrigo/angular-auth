import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private afAuth:AngularFireAuth) { }

  login(user:User){
    return this.afAuth.signInWithEmailAndPassword(user.email,user.password)
  }
}
