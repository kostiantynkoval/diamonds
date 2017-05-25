import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Diamond } from './diamond';
import { DiamondsService } from './diamonds.service';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-selected',
  templateUrl: './selected-diamond.component.html',
  styleUrls: ['./selected-diamond.component.css']
})
export class SelectedDiamondComponent implements OnInit{

  public diamond: Diamond;
  constructor(
      private diamondsService: DiamondsService,
      private route: ActivatedRoute,
      private location: Location,
      private authService: AuthService
    ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.diamondsService.getDiamond(params['id']))
      .subscribe(diamond => {
        console.log(diamond);
        this.diamond = diamond
      });
  }

  logout(): void {
    confirm('Are you sure?');
    this.authService.logout();
  }

  // ngAfterViewChecked() {
  //   console.log(this.diamond);
  // }
}