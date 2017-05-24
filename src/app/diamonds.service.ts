import { Injectable } from '@angular/core';

import { Diamond } from './diamond';
import { DIAMONDS } from './diamonds-mock';
import { HttpInterceptor } from './interceptor.service';

@Injectable()
export class DiamondsService {

  getDiamonds(): Promise<Diamond[]> {
    return Promise.resolve(DIAMONDS);
  }

  getDiamond(id: number): Promise<Diamond> {
    return this.getDiamonds()
               .then(diamonds => diamonds.find(diamond => diamond.id === id));
  }
}
