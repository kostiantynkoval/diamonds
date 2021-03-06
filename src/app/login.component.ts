import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  email: string = "test@test.com";
  password: string = "";

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }
  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn() ? 'in' : 'out');
  }
  login() {
    this.message = 'Logging in ...';
    this.authService.login(this.email, this.password)
        .subscribe(
          () => {
              this.setMessage();
              if (this.authService.isLoggedIn()) {
              // Get the redirect URL from our auth service
              // If no redirect has been set, use the default
              let redirect = '/diamonds';
              // Redirect the user
              this.router.navigate([redirect]);
              }
      });
  }
  logout() {
    this.setMessage();
    this.authService.logout();
  }
}
