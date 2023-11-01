import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartLogicService {
  private total = new BehaviorSubject<number>(0);
  constructor() { }
  incTotal(value:number){
    const currentTotal = this.total.value;
    const newTotal = currentTotal + value;
    this.total.next(newTotal);
  }
  decTotal(value: number){
    const currentTotal = this.total.value;
    const newTotal =  Math.max(currentTotal - value, 0);
    this.total.next(newTotal);
  }
  addVoucher(discount: number){
    const currentTotal = this.total.value;
    const discountVal = currentTotal * (discount * 0.01)
    const newTotal =  currentTotal - discountVal;
    this.total.next(newTotal)
  }
  get total$() {
    return this.total.asObservable();
  }
}
