import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';


import { BedrijflistComponent } from './bedrijflist/bedrijflist.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    BedrijflistComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
