import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpInterceptor } from './interceptor.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  //isLoggedIn: boolean;
  private token: string;

  constructor(private http: Http,
              private customHttp: HttpInterceptor) {
      this.token = localStorage.getItem('token');
      if(this.token) {
        this.checkToken();
      }
  }

  public checkToken() {
    // let Header = new Headers();
    // console.log(typeof(Header));
    // Header.append('Authorization', this.token);
    console.log(this.customHttp);
    this.customHttp.get('/users/profile').toPromise()
      .then((res) => {
        console.log(res);
        if(!res.json().success) {
          this.logout();
        }
      }).catch(() => {
        this.logout();
      });
  }

  public isLoggedIn():boolean {
    return (this.token)? true : false;
  }

  public login(email: string, password:string): Observable<any> {
    return this.http.post('/users/login', {email, password})
      .map((res: Response) => {
        let obj =  res.json();
        if(obj.success) {
          this.token = res.headers.get('authorization');
          console.log('token: ',this.token);
          localStorage.setItem('token', this.token);
        }
        return obj;
      });
  }

  public logout(): void {
    this.token = "";
    localStorage.removeItem('token');
  }
}
