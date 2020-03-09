import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  loginForm: FormGroup;
  user :User;

  constructor(
    private authenticationService : AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username :new FormControl(''),
      password : new FormControl('')
    });
  
  }
 
  onSubmit()
  {
    const user = {
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
    } as User
    console.log(user);
    
this.authenticationService.login(user).subscribe(
  (data) =>{
    console.warn(data);
  },
 erro => {
  console.warn('connexion echoué!!!!');
}
  

)
  }
}
