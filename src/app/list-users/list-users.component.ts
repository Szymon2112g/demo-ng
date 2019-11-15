import { Component, OnInit } from '@angular/core';
import {BasicDataService, User} from '../service/basic-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[]

  constructor(
      private basicData: BasicDataService,
      private router: Router
    ) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.basicData.getAllUsers().subscribe(
      response => {
        this.users = response;
      });
  }

  deleteUser(id) {
    this.basicData.deleteUser(id).subscribe(
      response => {
        console.log(response),
        this.getAll();
      }
    );
  }

  updateUser(id) {
    this.router.navigate(['user', id]);
  }

  createUser() {
    this.router.navigate(['user', -1]);
  }

}
