import { LoginModule } from './../login/login.module';
import { HeroModule } from './../../shared/components/hero';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomePageComponent } from './pages/home-page.component';
import { MaterialModule } from '../../shared/material';



@NgModule({
  declarations: [HomeComponent,HomePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeroModule,
    LoginModule
  ],
  exports:[HomePageComponent]
})
export class HomeModule { }
