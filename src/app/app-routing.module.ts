import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component'

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'members', component:MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
