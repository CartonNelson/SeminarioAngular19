import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { BeerListComponent } from './beer-list/beer-list.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { ListsContainerComponent } from './lists-container/lists-container.component';


const routes: Routes = [
  {path: '', component: ListsContainerComponent},
  {path: 'home', component: ListsContainerComponent},
  {path: 'about', component:BreweryAboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
