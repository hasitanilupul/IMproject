// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {EmailComponent} from './email/email.component';
import {SignupComponent} from './signup/signup.component';
import {MembersComponent} from './members/members.component';
import {NewsFeedComponent} from './news-feed/news-feed.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { NavComponent } from './nav/nav.component';

import {ProfileService} from './profile/profile.service';
import { MessageComponent } from './message/message.component';
import { GramaComponent } from './grama/grama.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    NewsFeedComponent,
    ProfileComponent,
    NavComponent,
    MessageComponent,
    GramaComponent
  ],
  imports: [
    // NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
