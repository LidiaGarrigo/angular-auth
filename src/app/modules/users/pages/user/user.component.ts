import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  //Leer el id del usuario que viene por parámetro
  //llamar al servicio UserService pasando el id.
  //crear un método en UserService llamado:
      //getUserById$(id){}

  //subscribirse al método y recoger el user que devuelve.
  //pintar los datos del user.

  
  ngOnInit(): void {
  }

}
