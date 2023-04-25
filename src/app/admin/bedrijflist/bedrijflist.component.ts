import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbAService } from './nba.service';

@Component({
  selector: 'app-bedrijflist',
  templateUrl: './bedrijflist.component.html',
  styleUrls: ['./bedrijflist.component.scss']
})
export class BedrijflistComponent implements OnInit {
  columns = ['name', 'team'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  constructor(private nbaService: NbAService) {



  }



  ngOnInit(): void {
    this.nbaService.getData().subscribe((data) => {
      this.dataSource = data;
    });


    //this.dataSource = new TableVirtualScrollDataSource(this.data);
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
