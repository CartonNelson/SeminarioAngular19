import { Component, OnInit, Output } from '@angular/core';
import { Beer } from './Beer';
import { BEERS } from './mocks';
import {BeerDataService} from '../services/beer-data.service';
import {analyzeNgModules} from '@angular/compiler';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  public beers: Beer[];
  @Output() public beerCart: string[];
  //public imgSource:string;

  constructor(private beerDataService: BeerDataService) {

  }

  
  ngOnInit() {
    //usando el mock
    //this.beers = BEERS;

    //usando servicios
    //let BeerData = new BeerDataService();
    //this.beers = 

    this.beerDataService.getBeers().subscribe(response => {
      this.beers=[];
      for (const key in response) {
        if (response.hasOwnProperty(key)){
            const element = response[key];
            console.log(response);
            this.beers.push(element);

          }    
      }
    }
    );

  }


  public masBirra(beer:Beer) {
    if (beer.stock > 0) {
      beer.stock--;
      beer.cant++;
    }


  }
  public menosBirra(beer:Beer) {
    if (beer.cant > 0) {
      beer.cant--;
      beer.stock++;
    }
  }


}
