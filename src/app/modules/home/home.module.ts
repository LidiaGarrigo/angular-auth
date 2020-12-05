import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home.component';
import { HomePageComponent } from './pages/home-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/material';



@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],exports:[HomePageComponent]
})
export class HomeModule { }
