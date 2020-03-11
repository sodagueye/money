import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {
dataUser:any;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
   // this.userService.findAll().subscribe(
      //data=>{
       // this.dataUser =data;
        //console.log(data)
     // }
   // )
  }

}
