import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BedrijflistComponent } from './admin/bedrijflist/bedrijflist.component';

const routes: Routes = [
    { path: '',   redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: BedrijflistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
