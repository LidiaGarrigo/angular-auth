import { ComponentFactory, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Component} from '@angular/core';
import { User } from '../../../../shared/models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user:User;
  @Input() factory: ComponentFactory<null>;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) vcr: ViewContainerRef;

  ngAfterViewInit()  {

    setTimeout(_=>this.vcr.createComponent(this.factory));
  }
}
