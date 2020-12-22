<<<<<<< HEAD
import { UserComponent } from './../../../../../src/app/modules/users/pages/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'profile/:id', component: UserComponent}

];
=======
import { AuthGuard } from './../../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile/:id', component: UserComponent, canActivate: [AuthGuard]}];
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
