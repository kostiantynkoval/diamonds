import { Component, OnInit } from '@angular/core';
import { Diamond } from './diamond';

import { DiamondsService } from './diamonds.service';


@Component({
  selector: 'app-list',
  templateUrl: './diamonds-list.component.html',
  styleUrls: ['./diamonds-list.component.css'],
  providers: [DiamondsService]
})
export class ListComponent implements OnInit{

  ngOnInit(): void{
    this.getDiamonds();
  }
  diamonds: Diamond[];
  
  constructor(private diamondsService: DiamondsService) { }

  getDiamonds(): void{
    this.diamondsService.getDiamonds().then(diamonds => this.diamonds = diamonds);
  }

  selectedDiamond: Diamond;

  onSelect(diamond: Diamond): void {
    this.selectedDiamond = diamond;
  }
}