import { Injectable } from '@angular/core';
import { HttpInterceptor } from './interceptor.service';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Diamond } from './diamond';
//import { DIAMONDS } from './diamonds-mock';


@Injectable()
export class DiamondsService {

  private diamondsUrl = 'api/images/';  // URL to web API
  diamonds: Diamond[] = [];

  constructor (private http: HttpInterceptor) {}

  getDiamonds(): Promise<Diamond[]> {
    const allUrl = this.diamondsUrl+'all';
    return this.http.get(allUrl)
                    .toPromise()
                    .then(res => res.json().collections)
                    //.then(diamonds => this.diamonds = diamonds)
                    .catch(this.handleError);
  }


  private handleError (error: any) {
    console.error('Error', error);
    return Promise.reject(error.message || error);
  }

  getDiamond(id: string): Promise<Diamond> {
    const oneUrl = `${this.diamondsUrl}${id}`;
    return this.http.get(oneUrl)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
  }
}
