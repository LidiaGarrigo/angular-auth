import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FireUserService {

  constructor(private afs: AngularFirestore) { }

  getById$(id): Observable<User> {

    return this.afs.collection<User>('users').doc(id).valueChanges();

  }


}
