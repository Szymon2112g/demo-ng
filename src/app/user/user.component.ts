import { Component, OnInit } from '@angular/core';
import {BasicDataService, User} from '../service/basic-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  user: User;
  welcomeMessage: string;

  constructor(
    private basicService: BasicDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params[`id`];

    this.user = new User(this.id,'',0,0);

    this.welcomeMessage = 'Create new user';

    if(this.id != -1) {
      this.welcomeMessage = 'Update user';

      this.basicService.getSingleUser(this.id)
        .subscribe(
          data => this.user = data
        );
    }
  }

  saveUser() {
      if(this.id == -1) {
        this.basicService.createUser(this.user)
          .subscribe(
            data => {
              this.router.navigate(['jpa']);
            }
          );
      } else {
          this.basicService.updateUser(this.id, this.user)
            .subscribe(
              data => {
                this.router.navigate(['jpa']);
              }
            );
      }
  }

}
