

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, FireAuthService } from '../../../shared/services';

@Component({
  selector: 'app-login',
  template:`<app-login-form [formGroup]='formGroup'
                            (addItem)='loginUser($event)'>
            </app-login-form>`
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private fb: FormBuilder,
              // private authService:AuthService,
              private authFireService: FireAuthService,
              private router:Router) { }

  createForm(): FormGroup {
    return this.fb.group ({
      id:'',
      email:'',
      password:''
    })

  }

  async loginUser(user){
      const result = await this.authFireService.login(user);
/*    const token = await result.user.getIdToken();
      localStorage.setItem('accessToken', token); */
      this.router.navigate([`/users/profile/${result.user.uid}`])
  }
/*   loginUser(user){

    this.authService.loginUser$(user).subscribe(
      data=> {
        this.authService.setToken(data.token);
        this.router.navigate([`users/profile/${data.id}`])
      }
    );

    //navegue al componente profile.

  } */



  ngOnInit(): void {

    this.formGroup = this.createForm();
  }

}
