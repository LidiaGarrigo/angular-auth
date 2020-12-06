import { AuthService } from './../../services';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isSticky= true;
  @Input() isAuthenticated:boolean;
  title:string='People &Co'

  @HostBinding('style.width') width ='100%';
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log(window.pageYOffset,window.innerHeight)
    console.log(window.pageYOffset >= window.innerHeight)
    this.isSticky = window.pageYOffset >= 775;
  }
  constructor(private authService:AuthService,
              private router:Router) { }

  isLogged:boolean;
  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.authService.isLogged.subscribe(data=> {this.isLogged=data;
    console.log(this.isLogged)});
  }

}
