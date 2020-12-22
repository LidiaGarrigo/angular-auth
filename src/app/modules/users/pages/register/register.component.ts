import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user';
import { FireAuthService } from '../../../../shared/services/fire-auth.service';
import { FireUserService } from '../../../../shared/services/fire-user.service';

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

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      name:'',
      password:''
    })
  }

  async registerUser(user:User){
    const credentials = await this.authFireService.register(user);
    user.id = credentials.user.uid;
    await this.userFireService.create(user);
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.formGroup= this.createForm();
  }

}
