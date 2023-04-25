import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';


import { BedrijflistComponent } from './bedrijflist/bedrijflist.component';


@NgModule({
  declarations: [
    BedrijflistComponent
  ],
  imports: [
    CommonModule,
    MatTableDataSource,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ]
})
export class AdminModule { }
