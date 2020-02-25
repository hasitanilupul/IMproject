import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.afAuth.authState.subscribe(user => {
      console.log(user);
      this.user.chat = [null];
      this.user.displayName = user.displayName;
      this.user.email = user.email;
      this.user.photoURL = user.photoURL;
    });

  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {

    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
        /* this.firestore.collection('user').doc(res.user.uid).get().toPromise()
        .then(value => {
          if(!value.data()){
            this.firestore.collection('user').doc(res.user.uid).set(
              {
                Name: res.user.displayName,
                Email: res.user.email,
                DOB: ''
              }
            )
          }
        })
        .catch(err => console.log(err)) */
        this.firestore.collection('user').doc(res.user.uid).set(
          {
            Name: res.user.displayName,
            Email: res.user.email,
            DOB: '',
            chat: []
          }
        );
        this.ngZone.run(() => {
          this.router.navigate(['members']);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

  // Firebase Google Sign-in
  SigninWithGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log('Successfully logged in!');
      }).catch(error => {
        console.log(error);
      });
  }

  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }

  // async getUser() {
  //   await this.afAuth.authState.pipe(). .subscribe(user => {
  //     console.log(user);
  //     this.user = user;
  //   });
  //   return this.user;
  // }

}
