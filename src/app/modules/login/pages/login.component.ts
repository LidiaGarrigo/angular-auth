import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  formGroup: FormGroup;
  /* itemList: Observable<Item[]>; */

  constructor(private fb: FormBuilder){}

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      password:''
    })
  }


}
