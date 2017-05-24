import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Diamond } from './diamond';
import { DiamondsService } from './diamonds.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-selected',
  templateUrl: './selected-diamond.component.html',
  styleUrls: ['./selected-diamond.component.css']
})
export class SelectedDiamondComponent implements OnInit{
  //@Input() diamond: Diamond;
  public diamond: Diamond;
  constructor(
      private diamondsService: DiamondsService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.diamondsService.getDiamond(+params['id']))
      .subscribe(diamond => this.diamond = diamond);
  }

  // ngAfterViewChecked() {
  //   console.log(this.diamond);
  // }
}