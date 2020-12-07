import { AuthService } from 'src/app/shared/services/auth.service';
import { ComponentFactory } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HeaderComponent } from './../../../shared/components';
import { Router } from '@angular/router';
import { FireAuthService } from '../../../shared/services';

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
              private authFireService: FireAuthService,
              private router: Router){}

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      password:''
    })
  }

  async loginUser(user){
      const result = await this.authFireService.login(user);
      const token  = await result.user.getIdToken();
      console.log(result);
      localStorage.setItem('accessToken', token);

  }
/*   loginUser(user){
    this.authService.loginuser$(user).subscribe(data => {
      /*           this.authService.setUser(data.user);

                this.authService.setToken(data.token);
                this.router.onSameUrlNavigation = 'reload';
                //this.router.navigate(['/']);
                this.router.navigate([`/users/profile/${data.id}`]);


                this.isError = false;
              },
              error => this.onIsError());
  }

 */  onIsError(): void {
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
