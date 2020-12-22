<<<<<<< HEAD
=======
import { LoginModule } from './../login/login.module';
import { HeroModule } from './../../shared/components/hero';
import { RouterModule } from '@angular/router';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomePageComponent } from './pages/home-page.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
import { MaterialModule } from '../../shared/material';



@NgModule({
<<<<<<< HEAD
  declarations: [HomeComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],exports:[HomePageComponent]
=======
  declarations: [HomeComponent,HomePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeroModule,
    LoginModule
  ],
  exports:[HomePageComponent]
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
})
export class HomeModule { }
