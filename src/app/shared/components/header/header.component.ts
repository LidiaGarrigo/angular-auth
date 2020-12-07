import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged:boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      this.authService.isLogged.subscribe(data=> this.isLogged=data);
  }

  logout(){
    this.authService.logout();
  }

}
