import { UserService } from './../../services/user.service';
import { ProfilService } from './../../services/profil.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userForm:FormGroup
profil:any
  constructor(
    private profilService:ProfilService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username :new FormControl(''),
      password :new FormControl(''),
      nom :new FormControl(''),
      prenom :new FormControl(''),
      profil :new FormControl('')
    });
    this.profilService.getProfil().subscribe(
      data =>{
       this.profil = data;
      }
    )
  }
  onCreate(){
    const user = {
  username: this.userForm.value.username,
  password: this.userForm.value.password,
  nom: this.userForm.value.nom,
  prenom: this.userForm.value.prenom,
  profil :`/api/profils/${this.userForm.value.profil}`
 }
this.userService.register(user).subscribe(
  data=>{
    alert(JSON.stringify(data))
  }
)
  }
}
