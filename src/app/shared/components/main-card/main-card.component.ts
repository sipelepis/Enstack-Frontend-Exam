import { Component, Input, OnInit } from '@angular/core';
import { DataInterface } from '../../types/data.model';
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent  implements OnInit {
  @Input() item?:  DataInterface;
  constructor() { }
  ngOnInit() {}
}
