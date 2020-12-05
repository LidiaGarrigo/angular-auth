import { LoginComponent } from './../../login/pages/login.component';
import { Component, OnInit, ComponentFactoryResolver, ComponentFactory } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `<app-home [isLogged]='isLogged' [factory]='factory'></app-home>`
})
export class HomePageComponent implements OnInit {
  factory: ComponentFactory<any>;
  isLogged: boolean;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.isLogged = eval(localStorage.getItem('isLogged'));
    this.factory = this.componentResolver.resolveComponentFactory(LoginComponent);
  }


}
