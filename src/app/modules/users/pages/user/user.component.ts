<<<<<<< HEAD
import { User } from './../../../../../../../src/app/shared/models/user';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FireUserService } from '../../../../../../../src/app/shared/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!:User;
  constructor(private routes:ActivatedRoute,
              private userFireService: FireUserService) { }

  //Leer el id del usuario que viene por parámetro
  //llamar al servicio UserService pasando el id.
  //crear un método en UserService llamado:
      //getUserById$(id){}

  //subscribirse al método y recoger el user que devuelve.
  //pintar los datos del user.

  getUser(id){
    this.userFireService.getById$(id).subscribe(data => this.user = data);
  }

  ngOnInit(): void {
    this.routes.params.subscribe(
      (params: Params)=> this.getUser(params.id)
    )
=======
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
    this.sucription = this.userFireService.getById$(id).subscribe(data =>{this.user=data /* [0] */
    console.log('usercomponent',this.user)});
  }

  ngOnInit(): void {

    this.routes.params.subscribe(
      (params: Params) => {
        console.log(params.id);
       this.getUser(params.id);
       this.userFireService.getByNameAndId().subscribe(console.log);
      });

    this.factory = this.componentResolver.resolveComponentFactory(HeaderComponent);
  }
  ngOnDestroy():void{
    this.sucription.unsubscribe;
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
  }

}
