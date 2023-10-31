import { Component, OnInit } from '@angular/core';
import { FilterResService } from 'src/app/shared/services/filter-res.service';

import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.page.html',
  styleUrls: ['./chair.page.scss'],
})
export class ChairPage implements OnInit {
  data?: DataInterface[];
  constructor(private filterService: FilterResService) { }
  ngOnInit() {
    this.data = this.filterService.filterAndSortChairs();
    console.log("Popular: ",this.filterService.setPopular());
    console.log("Chair: ",this.filterService.filterAndSortChairs());
    console.log("Table: ",this.filterService.filterAndSortTables());
    console.log("Armchair: ",this.filterService.filterAndSortArmchair());
    console.log("Bed: ",this.filterService.filterAndSortBed());
  }

}
