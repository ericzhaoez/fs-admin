import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  // users: Array<any>;
  public users: Array<User> = new Array();

  constructor(
    private userService: UserService
  ) {
    this.userService.getAllUsers((res) => {
      this.users = res;
    });

  }

  ngOnInit() {
  }

}