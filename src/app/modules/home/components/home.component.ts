import { AfterViewInit,
         Component,
         ComponentFactory,
         Input,
         ViewChild,
         ViewContainerRef} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @Input() isLogged:boolean;
  @Input() factory: ComponentFactory<null>;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) vcr: ViewContainerRef;

  ngAfterViewInit()  {

    setTimeout(_=>{this.vcr.createComponent(this.factory); console.log(this.vcr)});
  }
}
