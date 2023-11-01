import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInterface } from '../shared/types/data.model';
import { AddToCartService } from '../shared/services/add.to.cart.service';
import { CartLogicService } from '../shared/services/cart-logic.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems?: DataInterface[]=[];
  total$?: Observable<number>;
  voucher: FormGroup;
  discountNumber: number | null = null;
  constructor(
    private cartLogicService: CartLogicService,
    private route: Router,
    private addToCart: AddToCartService,
    private formBuilder: FormBuilder
    ) {
      this.voucher = this.formBuilder.group({
        discount: ['', [Validators.pattern(/^DISCOUNT(\d{2}$)/)]]
      })
  }
  ionViewDidEnter(){
    this.cartItems = this.addToCart.getCartItems();
    this.total$ = this.cartLogicService.total$;
  }
  ngOnInit() {
  }

  checkDiscount(){
    return this.voucher.get('discount')?.hasError('pattern')
      ? 'Not a valid voucher code!' : '';
  }
  applyVoucher(){
    const regex = /\d{2}$/;
    const voucher = this.voucher.get('discount')?.value.match(regex);
    if (voucher) {
      this.discountNumber = parseInt(voucher[0], 10);
      this.cartLogicService.addVoucher(this.discountNumber);
    }
  }
  navToHome(){
    this.route.navigate(['home'])
  }
  checkout(){
    this.route.navigate(['success'])
  }
}
