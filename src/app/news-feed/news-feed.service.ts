import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {error} from 'util';
import {OrderByOptions} from '@angular/fire/database-deprecated/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  constructor(private firestore: AngularFirestore) {
  }

  addNews(news) {
    this.firestore.collection('news').add(news)
      .then(value => console.log('wrtiten'))
      .catch(err => console.log(err));
  }

  getNews(limit, last) {
    if (last === null) {
      return this.firestore.collection('news')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .get();
    } else {
      return this.firestore.collection('news')
        .ref
        .orderBy('addedOn', 'desc')
        .limit(limit)
        .startAfter(last)
        .get();
    }

  }
}
