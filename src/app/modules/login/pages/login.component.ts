import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginFormComponent } from './../components/login-form.component';
import { ComponentFactory, AfterViewInit } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeaderComponent } from './../../../shared/components';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `<app-login-form #loginForm
                              [formGroup]='formGroup'
                              [factory]='factory'
                              (addItem)='loginUser($event)'>
             </app-login-form>`
})
export class LoginComponent implements OnInit/* , AfterViewInit */{
  formGroup: FormGroup;
  factory: ComponentFactory<any>;
  isError=false;
/*   isSticky =true;
 */
  /* @ViewChild('loginForm', {read: LoginFormComponent}) formComponent: LoginFormComponent; */
  constructor(private fb: FormBuilder,
              private componentResolver: ComponentFactoryResolver,
              private authService: AuthService,
              private router: Router){}

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      password:''
    })
  }

  loginUser(user){
    this.authService.loginuser$(user).subscribe(data => {
      /*           this.authService.setUser(data.user); */

                this.authService.setToken(data.token);
                this.router.onSameUrlNavigation = 'reload';
                //this.router.navigate(['/']);
                this.router.navigate([`/users/profile/${data.id}`]);


                this.isError = false;
              },
              error => this.onIsError());
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

  ngOnInit(): void {
    this.formGroup = this.createForm();
    this.factory = this.componentResolver.resolveComponentFactory(HeaderComponent);
  }
/*   ngAfterViewInit(){
      this.formComponent.isSticky = this.isSticky;
      console.log(this.formComponent);
  } */


}
