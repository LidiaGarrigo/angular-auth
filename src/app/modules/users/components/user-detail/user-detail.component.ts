<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../../../src/app/shared/models';
=======
import { ComponentFactory, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Component} from '@angular/core';
import { User } from '../../../../shared/models';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
<<<<<<< HEAD
export class UserDetailComponent implements OnInit {

  @Input() user:User;
  constructor() { }

  ngOnInit(): void {
  }

=======
export class UserDetailComponent {
  @Input() user:User;
  @Input() factory: ComponentFactory<null>;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) vcr: ViewContainerRef;

  ngAfterViewInit()  {

    setTimeout(_=>this.vcr.createComponent(this.factory));
  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
}
