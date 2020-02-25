import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {MessageComponent} from './message/message.component';
import {GramaComponent} from './grama/grama.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'members', component: MembersComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'message', component: MessageComponent},
  {path: 'grama', component: GramaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
