import { Component, OnInit,ViewChild, Input } from '@angular/core';
import{ShoppingCartComponent} from'../shopping-cart/shopping-cart.component';
import {BeerListComponent} from '../beer-list/beer-list.component';


@Component({
  selector: 'app-lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss']
})
export class ListsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  
}
