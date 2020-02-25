import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GramaService {

  constructor(private firestore: AngularFirestore) {
  }

  addNews(news) {
    this.firestore.collection('grama').add(news)
      .then(value => console.log('wrtiten'))
      .catch(err => console.log(err));
  }

  getNews(limit, last) {
    if (last === null) {
      return this.firestore.collection('grama')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .get();
    } else {
      return this.firestore.collection('grama')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .startAfter(last)
        .get();
    }

  }
}
