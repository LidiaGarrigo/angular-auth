<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FireAuthService } from '../../services';
=======
import { Subscription } from 'rxjs';
import { FireAuthService } from './../../services';
import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
<<<<<<< HEAD

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

=======
  @Input() isSticky= true;
  @Input() isAuthenticated:boolean;
  title:string='People &Co'

  subscription:Subscription;
  @HostBinding('style.width') width ='100%';
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
/*     console.log(window.pageYOffset,window.innerHeight)
    console.log(window.pageYOffset >= window.innerHeight) */
    this.isSticky = window.pageYOffset >= 775;
  }
  constructor(private authFireService:FireAuthService,
              private router:Router) { }

  isLogged:boolean;
  logout(){
    this.authFireService.logout();
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
   this.subscription= this.authFireService.isLogged$().subscribe(user => {
      console.log('header', user);
      if(user && user.uid) {this.isLogged=true} else{this.isLogged=false};
    console.log(this.isLogged)});
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe;
  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
