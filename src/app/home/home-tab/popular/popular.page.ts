import { Component, OnInit } from '@angular/core';
import { FilterResService } from 'src/app/shared/services/filter-res.service';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {
  data?: DataInterface[];
  constructor(private filterService: FilterResService) { }
  ngOnInit() {
    this.data = this.filterService.setPopular();
  }
}
