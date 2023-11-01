import { Injectable } from '@angular/core';
import { DataInterface } from '../types/data.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item!: DataInterface;
  constructor() { }
  // SetItem
  setItem(item: DataInterface){
    this.item =item;
  }
  getItem(): DataInterface{
    return this.item
  }
}
