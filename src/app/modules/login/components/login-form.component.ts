import { AfterViewInit, Component, ComponentFactory, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, AfterViewInit {

  @Input() isSticky:boolean;
  @Input() formGroup: FormGroup;
  @Output() addItem = new EventEmitter();
  @Input() factory: ComponentFactory<null>;
  @ViewChild('viewContainerRef', {read: ViewContainerRef}) vcr: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('formulari', this.formGroup.value)
    this.addItem.emit(this.formGroup.value);
    this.formGroup.reset();
  }

  ngAfterViewInit()  {

    setTimeout(_=>this.vcr.createComponent(this.factory));
  }
}

