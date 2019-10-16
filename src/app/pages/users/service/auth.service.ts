import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router,
              private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(user: User) {
    return this.userService.login(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser: User) {
    this.loggedIn = true;
    this.currentUser.id = decodedUser.id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.status = decodedUser.status;
    decodedUser.status === 1 ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.status;
  }

}