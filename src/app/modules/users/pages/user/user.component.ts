import { Subscription } from 'rxjs';
import { FireUserService, UserService } from './../../../../shared/services';
import { User } from './../../../../shared/models';
import { ActivatedRoute, Params } from '@angular/router';
import { ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Component, ComponentFactory, OnInit } from '@angular/core';
import { HeaderComponent } from './../../../../shared/components';

@Component({
  selector: 'app-user',
  template: `<app-user-detail [user]='user' [factory]='factory'></app-user-detail>`
})
export class UserComponent implements OnInit, OnDestroy {
  user:User;
  sucription:Subscription;
  factory: ComponentFactory<any>;
  constructor(private componentResolver: ComponentFactoryResolver,
              private userFireService:FireUserService,
              private routes:ActivatedRoute) { }

  getUser(id){
    this.sucription = this.userFireService.getById$(id).subscribe(data =>{this.user=data
    console.log('usercomponent',this.user)});
  }

  ngOnInit(): void {

    this.routes.params.subscribe(
      (params: Params) => {
        console.log(params.id);
       this.getUser(params.id);
      });

    this.factory = this.componentResolver.resolveComponentFactory(HeaderComponent);
  }
  ngOnDestroy():void{
    this.sucription.unsubscribe;
  }

}
