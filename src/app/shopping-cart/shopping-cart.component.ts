import { Component, OnInit, Input } from '@angular/core';
import {BeerListComponent} from '../beer-list/beer-list.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() private cart : string[];

  constructor() { }

  ngOnInit() {
   
  }

}
