import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() formGroup:FormGroup;
  @Output() addItem = new EventEmitter();
  @Input() user:User;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.addItem.emit(this.formGroup.value);
    this.formGroup.reset();
  }


}
