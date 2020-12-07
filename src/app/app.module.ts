import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header';
import { HomeModule } from './modules/home';
import { LoginModule } from './modules/login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeBackendProvider } from './shared/helpers/fake-backend';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
