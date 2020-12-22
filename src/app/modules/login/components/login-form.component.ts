<<<<<<< HEAD
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
=======
import { AfterViewInit, Component, ComponentFactory, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
<<<<<<< HEAD
export class LoginFormComponent implements OnInit {

  @Input() formGroup:FormGroup;
  @Output() addItem = new EventEmitter();

  constructor() { }

  onSubmit(){

    this.addItem.emit(this.formGroup.value);
   }

  ngOnInit(): void {

  }

}
=======
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

>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
