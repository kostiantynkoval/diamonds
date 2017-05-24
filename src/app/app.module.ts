import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './diamonds-list.component';
import { SelectedDiamondComponent } from './selected-diamond.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { DiamondsService } from './diamonds.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectedDiamondComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginRoutingModule,
    HttpModule
  ],
  providers: [
    DiamondsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
