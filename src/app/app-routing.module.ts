import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'login', loadChildren:()=>import('./modules/login').then(m =>m.LoginModule)},
  {path:'users', loadChildren:()=>import('./modules/users').then(m =>m.UsersModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
