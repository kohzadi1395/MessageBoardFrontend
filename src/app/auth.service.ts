import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BaseUrl = 'http://localhost:53021/auth';
  NameKey = 'name';
  TokenKey = 'token';

  constructor(private http: Http, private router: Router) {
  }

  get name() {
    return localStorage.getItem(this.NameKey);
  }

  get token() {
    return localStorage.getItem(this.TokenKey);
  }

  get isAuthentication() {
    return !!this.token;
  }

  logout() {
    localStorage.removeItem(this.TokenKey);
    localStorage.removeItem(this.NameKey);
  }

  register(user) {
    delete user.confirmPassword;
    this.http.post(this.BaseUrl + '/register', user).subscribe(res => {
      const authentication = res.json();

      if (!authentication.token) {
        return;
      }

      localStorage.setItem(this.TokenKey, authentication.token);
      localStorage.setItem(this.NameKey, authentication.firstName);

      this.router.navigate(['/']);
    });
  }
}
