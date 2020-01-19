import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component'
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'members', component:MembersComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
