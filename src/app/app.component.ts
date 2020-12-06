import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHeader = true;
  showSidebar = false;
  showFooter = false;
  isAuthenticated = true;
  title = 'People & Co';
  isSticky: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

/*   @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log(window.pageYOffset,window.innerHeight)
    console.log(window.pageYOffset >= window.innerHeight)
    this.isSticky = window.pageYOffset >= 100;
  } */

  ngOnInit() {
  /*   this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    }); */
  }

}


