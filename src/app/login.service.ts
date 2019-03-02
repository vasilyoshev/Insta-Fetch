import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: Subject<void>;

  constructor(private cookieService: CookieService) {
    this.isLoggedIn = new Subject();
  }

  public checkLoggedIn(): boolean {
    return this.cookieService.check('dicksonadmin');
  }

  public logIn(): void {
    this.cookieService.set('dicksonadmin', '');
    this.isLoggedIn.next();
  }
}
