import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  form: FormGroup;
  news = [];

  constructor(public auth: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      content: ['', Validators.required]
    });
  }

  onPost() {
    this.news.push(this.form.value);
  }

}
