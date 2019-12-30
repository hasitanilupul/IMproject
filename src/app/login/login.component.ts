import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  error: any;
  constructor(private authService: AuthService){

  }

  ngOnInit() {
  }

}
