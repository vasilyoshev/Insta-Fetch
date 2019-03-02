import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.isLoggedIn = this.loginService.checkLoggedIn();
  }

  ngOnInit() {
    this.loginService.isLoggedIn.subscribe(() => {
      this.isLoggedIn = true;
    });
  }
}
