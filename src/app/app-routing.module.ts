import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './diamonds-list.component';
import { SelectedDiamondComponent } from './selected-diamond.component';
import { AuthGuard }   from './auth-guard.service';

const routes: Routes = [
        { path: '', redirectTo: '/diamonds', pathMatch: 'full' },
        { path: 'diamonds', component: ListComponent, canActivate: [AuthGuard] },
        { path: 'diamond/:id', component: SelectedDiamondComponent, canActivate: [AuthGuard] }
      ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
