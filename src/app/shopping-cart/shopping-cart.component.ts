import { Component, OnInit, Input, Injectable } from '@angular/core';
import {CartService} from '../services/cart.service'
import {Beer} from '../beer-list/Beer';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent implements OnInit {



  constructor(private cartService:CartService) {}
  private cart : Beer[];

  ngOnInit() {
    this.cartService.items.subscribe(data=>{
      this.cart=data;
      console.log(this.cart.toString())
    });
   }

}
