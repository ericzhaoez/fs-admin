import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.users = this.userService.getUsers();[
      {
        name: 'Eric',
        lastName: 'Zhao',
        email: 'ez.zhao@mail.utoronto.ca',
        cellPhone: 6473301891
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 746541230
      },
      {
        name: 'Jeff',
        lastName: 'Briggs',
        email: 'jess@mail.com',
        cellPhone: 471234567
      }
    ];
  }

  ngOnInit() {
  }

}