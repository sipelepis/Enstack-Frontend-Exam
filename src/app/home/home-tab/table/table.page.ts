import { Component, OnInit } from '@angular/core';
import { FilterResService } from 'src/app/shared/services/filter-res.service';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  data?: DataInterface[];
  constructor(private filterService: FilterResService) { }
  ngOnInit() {
    this.data = this.filterService.filterAndSortTables();
  }
}
