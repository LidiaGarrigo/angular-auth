import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  constructor(private authFireService: FireAuthService) { }

  ngOnInit(): void {
    this.authFireService.isLogged$().subscribe(user => {
      if (user && user.uid) { this.isLogged = true } else { this.isLogged = false }
    });
  }

  logout() {
    this.authFireService.logout();
  }

}
