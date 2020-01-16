import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {CategoriesComponent} from "./categories/categories.component";


const routes: Routes = [
  {
    path:'produits',
    component:ProduitsComponent
  },
  {
    path:'categories',
    component:CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
