import { UserService } from './../../../../shared/services';
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
              private userService:UserService,
              private router: Router){}

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      name:'',
      password:''
    })
  }

  registerUser(user:User){
      this.userService.register$(user).subscribe(data=>{
        this.router.onSameUrlNavigation = 'reload';
        //this.router.navigate(['/']);
        this.router.navigate([`/login`]);
      })
  }
  ngOnInit(): void {
    this.formGroup= this.createForm();
  }

}
