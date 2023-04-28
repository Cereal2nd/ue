import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedrijflistComponent } from './bedrijflist/bedrijflist.component';


const routes: Routes = [
  { path: 'list', component: BedrijflistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
