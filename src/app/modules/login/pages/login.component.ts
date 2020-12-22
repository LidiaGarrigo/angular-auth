<<<<<<< HEAD


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
=======
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
              private authFireService: FireAuthService,
              private router: Router){}

  createForm(): FormGroup{
    return this.fb.group({
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
      id:'',
      email:'',
      password:''
    })
<<<<<<< HEAD

=======
>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de
  }

  async loginUser(user){
      const result = await this.authFireService.login(user);
<<<<<<< HEAD
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
=======
      const token  = await result.user.getIdToken();
      console.log(result);
      localStorage.setItem('accessToken', token);
      this.router.onSameUrlNavigation = 'reload';
      //this.router.navigate(['/']);
      this.router.navigate([`/users/profile/${result.user.uid}`]);

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

>>>>>>> 7e883036157ea6e5674dabed29c134fa3f3ad3de

}
