import { Component, OnInit } from '@angular/core';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  selectedTab?: string = "popular";
  constructor() { }

  ngOnInit() {
  }

}
