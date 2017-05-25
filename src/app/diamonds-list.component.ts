import { Component, OnInit } from '@angular/core';
import { Diamond } from './diamond';

import { DiamondsService } from './diamonds.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-list',
  templateUrl: './diamonds-list.component.html',
  styleUrls: ['./diamonds-list.component.css'],
  providers: [DiamondsService]
})
export class ListComponent implements OnInit{

  diamonds: Diamond[];
  
  constructor(private diamondsService: DiamondsService,
              private authService: AuthService) { }

  ngOnInit(): void{
    this.getDiamonds();
  }

  getDiamonds(): void{
    this.diamondsService.getDiamonds().then(diamonds => {
      this.diamonds = diamonds;
      console.log(this.diamonds);
    });
  }

  selectedDiamond: Diamond;

  logout(): void {
    confirm('Are you sure?');
    this.authService.logout();
  }
  // onSelect(diamond: Diamond): void {
  //   this.selectedDiamond = diamond;
  // }
}