import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services';

@Component({
  selector: 'app-login',
  template:`<app-login-form [formGroup]='formGroup'
                            (addItem)='loginUser($event)'>
            </app-login-form>`
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private authService:AuthService,
              private router:Router) { }

  createForm(): FormGroup {
    return this.fb.group ({
      id:'',
      email:'',
      password:''
    })

  }

  loginUser(user){

    this.authService.loginUser$(user).subscribe(
      data=> {
        this.authService.setToken(data.token);
        this.router.navigate([`users/profile/${data.id}`])
      }
    );

    //navegue al componente profile.

  }



  ngOnInit(): void {

    this.formGroup = this.createForm();
  }

}
