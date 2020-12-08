import { FireUserService, FireAuthService } from './../../../../shared/services';
import { User } from '../../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template:`<app-register-form [formGroup]='formGroup'
                               (addItem)='registerUser($event)'>
  </app-register-form>`
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private userFireService:FireUserService,
              private authFireService:FireAuthService,
              private router: Router){}

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      name:'',
      password:''
    })
  }

async  registerUser(user:User){

const credentials = await this.authFireService.register(user);
user.id = credentials.user.uid;
await this.userFireService.create(user);
this.router.navigate(['/login']);

  }
  ngOnInit(): void {
    this.formGroup= this.createForm();
  }

}
