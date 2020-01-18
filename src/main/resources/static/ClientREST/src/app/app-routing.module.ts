import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//CATEGORIE
import {CategorieListComponent} from "./admin/categories/categorie-list/categorie-list.component";
import {UpdateCategorieComponent} from "./admin/categories/update-categorie/update-categorie.component";
import {CreateCategorieComponent} from "./admin/categories/create-categorie/create-categorie.component";
//PRODUIT
import {ProduitListComponent} from "./admin/produits/produit-list/produit-list.component";
import {UpdateProduitComponent} from "./admin/produits/update-produit/update-produit.component";
import {CreateProduitComponent} from "./admin/produits/create-produit/create-produit.component";
import {ClientListComponent} from "./admin/client/client-list/client-list.component";
import {UpdateClientComponent} from "./admin/client/update-client/update-client.component";
import {CreateClientComponent} from "./admin/client/create-client/create-client.component";
import {ProduitsComponent} from "./client/produits/produits.component";
import {ProduitDetailsComponent} from "./client/produits/produit-details/produit-details.component";


const routes: Routes = [
  {
    path:'admin/categorie',
    component:CategorieListComponent
  },
  {
    path:'admin/categorie/update/:id',
    component:UpdateCategorieComponent
  },
  {
    path:'admin/categorie/add',
    component:CreateCategorieComponent
  },
  {
    path:'admin/produit',
    component:ProduitListComponent
  },
  {
    path:'admin/produit/update/:id',
    component:UpdateProduitComponent
  },
  {
    path:'admin/produit/add',
    component:CreateProduitComponent
  },
  {
    path:'admin/client',
    component:ClientListComponent
  },
  {
    path:'admin/client/update/:id',
    component:UpdateClientComponent
  },
  {
    path:'admin/client/add',
    component:CreateClientComponent
  },
  {
    path:'client/produit',
    component:ProduitsComponent
  },
  {
    path:'client/produit/:id',
    component:ProduitDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
