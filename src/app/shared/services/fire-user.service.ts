<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
=======
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Injectable({
  providedIn: 'root'
})
export class FireUserService {

  constructor(private afs: AngularFirestore) { }

<<<<<<< HEAD
  getById$(id): Observable<User> {

    return this.afs.collection<User>('users').doc(id).valueChanges();

  }

=======
  read$():Observable<User[]>{

    return this.afs.collection<User>('users').valueChanges();

  }

  getById$(id):Observable<User>{
    return this.afs.collection<User>('users').doc(id).valueChanges().pipe(first());
    // return this.afs.collection<User>('users', ref => ref.where('id','==','Lir0KR4sX5YhPA7MKgesedSJgv12')).valueChanges();

  }

  getByNameAndId(){
    return this.afs.collection<User>('users', ref => ref.where('name','==','sara').where('id','==','Lir0KR4sX5YhPA7MKgesedSJgv12')).valueChanges();
  }

  create(user:User): Promise<void> {

    return this.afs.collection<User>('users').doc(user.id).set(user);
  }

  delete(user:User): Promise<void>{
    return this.afs.collection<User>('users').doc(user.id).delete();
  }

  update(user:User): Promise<void>{
    return this.afs.collection<User>('users').doc(user.id).update(user);
  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

}
