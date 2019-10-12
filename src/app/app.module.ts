import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralNavComponent } from './general-nav/general-nav.component';
import { FooterComponent } from './footer/footer.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListsContainerComponent } from './lists-container/lists-container.component';
import { FormsModule } from "@angular/forms";
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
//importo el servicio
import { BeerDataService} from './services/beer-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GeneralNavComponent,
    FooterComponent,
    BeerListComponent,
    ShoppingCartComponent,
    ListsContainerComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  //agrego el servivio al provider
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
