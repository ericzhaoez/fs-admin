import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // users: Array<User>;

  constructor(
    private httpClient: HttpClient
  ) {}

  // getUsers(): Array<User> {
  //   return this.users;
  // }

  getAllUsers(assign: Function) {
    this.httpClient.get('http://localhost:3000/api/users/').subscribe((response: Array<User>) => {
      assign(response);
    });
  }
}