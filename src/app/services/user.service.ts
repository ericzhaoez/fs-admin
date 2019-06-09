import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [
      {
        name: 'Eric',
        lastName: 'Zhao',
        email: 'ez.zhao@mail.utoronto.ca',
        cellPhone: 6473301891
      }
    ];
  }

  getUsers(): Array<User> {
    return this.users;
  }
}