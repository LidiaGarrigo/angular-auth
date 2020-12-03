import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  /* itemList: Observable<Item[]>; */

  constructor(private fb: FormBuilder){}
r() { }

  createForm(): FormGroup{
    return this.fb.group({
      id:'',
      email:'',
      password:''
    })
  }
  ngOnInit(): void {
  }

}
