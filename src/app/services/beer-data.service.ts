import { Injectable } from '@angular/core';
//para usar el mock de birras
import {BEERS} from '../beer-list/mocks';
//utilizando la BBDD de firebase
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn:'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  getBeers (){
    //usando el mock
    //return BEERS;

    //usando BBDD firebase
    //test de la catedra
    //return this.http.get('https://test-7ffd9.firebaseio.com/beers.json');

    return this.http.get('https://myfirstproject-e6100.firebaseio.com/beers.json');
  }

}