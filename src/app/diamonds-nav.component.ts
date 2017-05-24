import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './diamonds-nav.component.html',
  styleUrls: ['./diamonds-nav.component.css']
})
export class NavComponent{
  
  constructor(private _router:Router) {};

  ngAfterViewChecked() {
    console.log(this._router.url);
  }

}