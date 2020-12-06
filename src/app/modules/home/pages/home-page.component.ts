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


}
