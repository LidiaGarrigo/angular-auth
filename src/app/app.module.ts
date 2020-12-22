import { AngularFirestoreModule } from '@angular/fire/firestore';
<<<<<<< HEAD
import { AngularFireAuthModule } from '@angular/fire/auth';
=======
import {AngularFireAuthModule} from '@angular/fire/auth';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderModule } from './shared/components/header';
import { HomeModule } from './modules/home';
import { LoginModule } from './modules/login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fakeBackendProvider } from './shared/helpers/fake-backend';
import { UsersModule } from './modules/users';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './modules/home/';
import { HeaderModule } from './shared/components/header';
import { HeroModule } from './shared/components/hero';
import { fakeBackendProvider } from './shared/helpers/fake-backend';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HeaderModule,
    UsersModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
=======
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    HeaderModule,
    HeroModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
