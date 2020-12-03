import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../../shared/material';



@NgModule({
  declarations: [HomeComponent,HomePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule { }
