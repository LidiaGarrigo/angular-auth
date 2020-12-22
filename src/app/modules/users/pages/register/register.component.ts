<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../../../src/app/shared/models';
import { FireUserService, FireAuthService } from '../../../../../../../src/app/shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formGroup:FormGroup;
  constructor(private fb: FormBuilder,
              private authFireService: FireAuthService,
              private userFireService: FireUserService,
              private router: Router) { }
=======
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
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      name:'',
      password:''
    })
  }

<<<<<<< HEAD
  async registerUser(user:User){
    const credentials = await this.authFireService.register(user);
    user.id = credentials.user.uid;
    await this.userFireService.create(user);
    this.router.navigate(['/login']);
  }

=======
async  registerUser(user:User){

const credentials = await this.authFireService.register(user);
user.id = credentials.user.uid;
await this.userFireService.create(user);
this.router.navigate(['/login']);

  }
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
  ngOnInit(): void {
    this.formGroup= this.createForm();
  }

}
