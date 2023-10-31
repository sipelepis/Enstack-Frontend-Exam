import { Component, OnInit } from '@angular/core';
import { DataInterface } from 'src/app/shared/types/data.model';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  data: DataInterface[] = [
    {
      type: 'chair',
      name: 'Black Simple Lamp',
      price: 12.00,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 1,
      product_id: '00000001',
      description: 'Lorem Ipsum...',
      rating: 4.5,
      review_count: 50,
      stock: 50
    },
    {
      type: 'table',
      name: 'Black Simple Table',
      price: 12.61,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 1,
      product_id: '00000002',
      description: 'Lorem Ipsum...',
      rating: 4.1,
      review_count: 10,
      stock: 50
    },
    {
      type: 'armchair',
      name: 'Black Simple Armchair',
      price: 1.61,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 0,
      product_id: '00000003',
      description: 'Lorem Ipsum...',
      rating: 1.1,
      review_count: 100,
      stock: 0
    },
    {
      type: 'bed',
      name: 'Black Simple Bed',
      price: 2.61,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 10,
      product_id: '00000004',
      description: 'Lorem Ipsum...',
      rating: 0,
      review_count: 0,
      stock: 2
    },
    {
      type: 'chair',
      name: 'White Simple Chair',
      price: 99.0,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 12,
      product_id: '00000005',
      description: 'Lorem Ipsum...',
      rating: 0,
      review_count: 0,
      stock: 0
    },
    {
      type: 'table',
      name: 'White Simple Table',
      price: 80.0,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 0,
      product_id: '00000006',
      description: 'Lorem Ipsum...',
      rating: 5.0,
      review_count: 1000,
      stock: 2
    },
    {
      type: 'armchair',
      name: 'White Simple Armchair',
      price: 1000000.50,
      main_image: '<url>',
      product_images: ['<url>', '<url>', '<url>'],
      priority: 0,
      product_id: '00000007',
      description: 'Lorem Ipsum...',
      rating: 3.0,
      review_count: 1,
      stock: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
