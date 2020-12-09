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
  }

}
