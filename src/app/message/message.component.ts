import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {NewsFeedService} from '../news-feed/news-feed.service';
import {MessageService} from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  form: FormGroup;
  news = [];
  limit = 4;
  last = null;
  people = [
    {
      name: 'Kapila'
    },
    {
      name: 'Ravindu'
    }
  ];
  more = false;

  constructor(public auth: AuthService, private fb: FormBuilder, private service: MessageService) {
  }

  ngOnInit() {
    this.auth.afAuth.user.subscribe((user) => {
      this.form = this.fb.group({
        content: ['', Validators.required],
        addedOn: [Date.now(), Validators.required],
        addedBy: [user.displayName],
        avatar: [user.photoURL]
      });
      this.getMessages();
    });
  }

  sendMessage() {
    this.news.unshift(this.form.value);
    this.service.sendMessage(this.form.value);
    this.form.get('content').setValue('');
  }

  async getMessages() {
    const newItems = await this.service.getMessages(this.limit, this.last);
    this.last = newItems.docs[newItems.size - 1];
    this.more = newItems.size === 4;
    newItems.docs.forEach((value => this.news.push(value.data())));
  }

}
