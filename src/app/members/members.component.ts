import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewsFeedService} from '../news-feed/news-feed.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  form: FormGroup;
  news = [];
  limit = 4;
  last = null;
  more = false;

  constructor(public auth: AuthService, private fb: FormBuilder, private service: NewsFeedService) {
  }

  ngOnInit() {
    this.auth.afAuth.user.subscribe((user) => {
      this.form = this.fb.group({
        content: ['', Validators.required],
        addedOn: [Date.now(), Validators.required],
        addedBy: [user.displayName],
        avatar: [user.photoURL]
      });
      this.getNews();
    });
  }

  onPost() {
    this.news.unshift(this.form.value);
    this.service.addNews(this.form.value);
    this.form.get('content').setValue('');
  }

  async getNews() {
    const newItems = await this.service.getNews(this.limit, this.last);
    this.last = newItems.docs[newItems.size - 1];
    this.more = newItems.size === 4;
    newItems.docs.forEach((value => this.news.push(value.data())));
  }

}
