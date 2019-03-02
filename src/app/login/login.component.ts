import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isAuthCorrect: boolean;

  constructor(
    private fb: FormBuilder,
    private cookieService: CookieService,
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  submit(form: FormGroup): void {
    if (!form.valid) {
      return;
    }

    if (form.value.username === 'dicksonadmin' && form.value.password === 'HmUkf&wbS$L*V1') {
      this.loginService.logIn();
    } else {
      this.snackBar.open('Username or password is incorrect', 'OK', { duration: 5000 });
    }

  }
}
