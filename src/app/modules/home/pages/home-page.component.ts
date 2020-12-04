import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isLogged: boolean;
  constructor() { }

  ngOnInit(): void {
    this.isLogged = eval(localStorage.getItem('isLogged'));
  }

}
