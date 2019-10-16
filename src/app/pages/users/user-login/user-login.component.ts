import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../service/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  
  user: User = new User();
  loginForm: FormGroup;
 
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    if (this.authService.loggedIn) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.fb.group({
      email: this.email,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  login() {
    this.user = this.loginForm.value;
    console.log(this.authService.login(this.user));
    /*
    this.authService.login(this.user).(
      res => this.router.navigate(['/']),
      error => this.toast.setMessage('invalid email or password!', 'danger')
    );*/
  }

}
