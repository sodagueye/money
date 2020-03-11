import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  loginForm: FormGroup;
  user :User;
  returnUrl:string;

  constructor(
    private authenticationService : AuthenticationService,  private route: ActivatedRoute ,private router:Router ,private autthenticcationService:AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username :new FormControl(''),
      password : new FormControl('')
    });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl']||'/ajout';
  }
 
  onSubmit()
  {
    const user = {
      username:this.loginForm.value.username,
      password:this.loginForm.value.password,
    } as User
    //console.log(user);
    
this.authenticationService.login(user).subscribe(
  (data) =>{
    this.router.navigate([this.returnUrl]);
  },
 erro => {
  console.warn('connexion echoué!!!!');
}
  

)
  }
}
