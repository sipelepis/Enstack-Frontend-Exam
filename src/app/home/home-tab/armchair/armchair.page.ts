import { Component, OnInit } from '@angular/core';
import { FilterResService } from 'src/app/shared/services/filter-res.service';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-armchair',
  templateUrl: './armchair.page.html',
  styleUrls: ['./armchair.page.scss'],
})
export class ArmchairPage implements OnInit {
  data?: DataInterface[];
  constructor(private filterService: FilterResService) { }
  ngOnInit() {
    this.data = this.filterService.filterAndSortArmchair();
  }
}
