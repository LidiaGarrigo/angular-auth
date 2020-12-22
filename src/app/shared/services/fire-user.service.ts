import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FireUserService {
  create(user: User) {
    throw new Error('Method not implemented.');
  }

  constructor(private afs: AngularFirestore) { }

  getById$(id): Observable<User> {

    return this.afs.collection<User>('users').doc(id).valueChanges();

  }


}
