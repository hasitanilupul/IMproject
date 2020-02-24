import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../shared/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userRef : AngularFirestoreCollection<Profile> = null;

  private userPath : string = "/user";

  constructor(private db : AngularFirestore) {
    this.userRef = this.db.collection(this.userPath);

   }

   getAllUsers() : AngularFirestoreCollection<Profile>{
     return this.userRef;
   }
}
