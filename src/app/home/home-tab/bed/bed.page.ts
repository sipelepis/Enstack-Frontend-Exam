import { Component, OnInit } from '@angular/core';
import { FilterResService } from 'src/app/shared/services/filter-res.service';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.page.html',
  styleUrls: ['./bed.page.scss'],
})
export class BedPage implements OnInit {
  data?: DataInterface[];
  constructor(private filterService: FilterResService) { }
  ngOnInit() {
    this.data = this.filterService.filterAndSortBed();
  }
}
