import { Injectable } from '@angular/core';
import { data } from '../types/data';
import { DataInterface } from '../types/data.model';

@Injectable({
  providedIn: 'root'
})
export class FilterResService {
  data: DataInterface[] = data
  constructor() { }
  setPopular(): DataInterface[]{
    return data.filter(item => item.rating >= 4.0);
  }
  sortByRatingDescending(data: DataInterface[]): DataInterface[] {
    return data.sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }
  // Function to filter and sort 'chair' items
  filterAndSortChairs(): DataInterface[] {
    const chairItems = data.filter(item => item.type === 'chair');
    return this.sortByRatingDescending(chairItems);
  }
  // Function to filter and sort 'table' items
  filterAndSortTables(): DataInterface[] {
    const tableItems = data.filter(item => item.type === 'table');
    return this.sortByRatingDescending(tableItems);
  }
  // Function to filter and sort 'armchair' items
  filterAndSortArmchair(): DataInterface[] {
    const armchairItems = data.filter(item => item.type === 'armchair');
    return this.sortByRatingDescending(armchairItems);
  }
  // Function to filter and sort 'bed' items
  filterAndSortBed(): DataInterface[] {
    const bedItems = data.filter(item => item.type === 'bed');
    return this.sortByRatingDescending(bedItems);
  }
}
