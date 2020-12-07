import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
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
