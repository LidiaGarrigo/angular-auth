<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { AfterViewInit,
         Component,
         ComponentFactory,
         Input,
         ViewChild,
         ViewContainerRef} from '@angular/core';

>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
<<<<<<< HEAD
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
export class HomeComponent implements AfterViewInit {
  @Input() isLogged:boolean;
  @Input() factory: ComponentFactory<null>;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) vcr: ViewContainerRef;

  ngAfterViewInit()  {

    setTimeout(_=>{this.vcr.createComponent(this.factory); console.log(this.vcr)});
  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
