import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login.component';

<<<<<<< HEAD
const routes: Routes = [
  {path:'', component:LoginComponent}
=======



const routes: Routes = [
  {path: '', component: LoginComponent}
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
