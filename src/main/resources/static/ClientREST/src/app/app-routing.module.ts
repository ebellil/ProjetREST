import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//CATEGORIE
import {CategorieListComponent} from "./categories/categorie-list/categorie-list.component";
import {UpdateCategorieComponent} from "./categories/update-categorie/update-categorie.component";
import {CreateCategorieComponent} from "./categories/create-categorie/create-categorie.component";
//PRODUIT
import {ProduitListComponent} from "./produits/produit-list/produit-list.component";
import {UpdateProduitComponent} from "./produits/update-produit/update-produit.component";
import {CreateProduitComponent} from "./produits/create-produit/create-produit.component";
import {ClientListComponent} from "./client/client-list/client-list.component";
import {UpdateClientComponent} from "./client/update-client/update-client.component";
import {CreateClientComponent} from "./client/create-client/create-client.component";


const routes: Routes = [
  {
    path:'categorie',
    component:CategorieListComponent
  },
  {
    path:'categorie/update/:id',
    component:UpdateCategorieComponent
  },
  {
    path:'categorie/add',
    component:CreateCategorieComponent
  },
  {
    path:'produit',
    component:ProduitListComponent
  },
  {
    path:'produit/update/:id',
    component:UpdateProduitComponent
  },
  {
    path:'produit/add',
    component:CreateProduitComponent
  },
  {
    path:'client',
    component:ClientListComponent
  },
  {
    path:'client/update/:id',
    component:UpdateClientComponent
  },
  {
    path:'client/add',
    component:CreateClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
