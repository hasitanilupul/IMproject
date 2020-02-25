import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {firestore} from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private fs: AngularFirestore, private fireAuth: AngularFireAuth) {
  }

  sendGSReply(news, uid) {
    this.fs.collection('chat').doc(uid).collection('messages').add({
      sent: false,
      addedOn: new Date(),
      message: news.content
    })
      .then(value => console.log('wrtiten'))
      .catch(err => console.log(err));
  }

  getGSChatList() {
    return this.fs.collection('chat').doc(this.fireAuth.auth.currentUser.uid).collection('messages')
      .ref
      // .where('seen', '==', 'false')
      .limitToLast(10)
      .get();
  }

  sendMessage(news) {
    this.fs.collection('chat').doc(this.fireAuth.auth.currentUser.uid).set({seen: false});
    this.fs.collection('chat').doc(this.fireAuth.auth.currentUser.uid).collection('messages').add({
      sent: true,
      addedOn: new Date().getTime(),
      message: news.content
    })
      .then(value => console.log('wrtiten'))
      .catch(err => console.log(err));
  }

  getMessages(limit, last) {
    if (last === null) {
      return this.fs.collection('chat').doc(this.fireAuth.auth.currentUser.uid).collection('messages')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .get();
    } else {
      return this.fs.collection('chat').doc(this.fireAuth.auth.currentUser.uid).collection('messages')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .startAfter(last)
        .get();
    }

  }
}
