import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartPage } from 'src/app/cart/cart.page';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  selectedTab?: string = "popular";
  constructor(private route: Router) { }

  ngOnInit() {
  }
  navToCart(){
    this.route.navigate(['cart'])
  }

}
