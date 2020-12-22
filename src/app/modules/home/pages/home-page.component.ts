<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
import { LoginComponent } from './../../login/pages/login.component';
import { Component, OnInit, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { UserComponent } from './../../users/pages/user/user.component';

@Component({
  selector: 'app-home-page',
  template: `<app-home [isLogged]='isLogged'  [factory]='factory'></app-home>`
})
export class HomePageComponent implements OnInit {
  factory: ComponentFactory<any>;
  isLogged: boolean;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.isLogged = eval(localStorage.getItem('isLogged'));
    if(!this.isLogged){
      this.factory = this.componentResolver.resolveComponentFactory(LoginComponent);}
    else{
      this.factory = this.componentResolver.resolveComponentFactory(UserComponent);
    }
  }


>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
