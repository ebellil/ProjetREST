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
import {HomeAdminComponent} from "./admin/home-admin/home-admin.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {CreateCompteComponent} from "./client/compte/create-compte/create-compte.component";
import {CompteComponent} from "./client/compte/compte-details/compte.component";


const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: HomeAdminComponent
      },
      {
        path: 'produit',
        children:[
          {
            path: '',
            component: ProduitListComponent
          },
          {
            path: 'update/:id',
            component:UpdateProduitComponent
          },
          {
            path: 'add',
            component:CreateProduitComponent
          }
        ]
      },
      {
        path: 'categorie',
        children: [
          {
            path: '',
            component: CategorieListComponent
          },
          {
            path: 'add',
            component: CreateCategorieComponent
          },
          {
            path:'update/:id',
            component:UpdateCategorieComponent
          }
        ]
      },
      {
        path: 'client',
        children: [
          {
            path: '',
            component: ClientListComponent
          },
          {
            path:'update/:id',
            component:UpdateClientComponent
          },
          {
            path:'add',
            component:CreateClientComponent
          }
        ]
      }
    ]
  },
  {
    path: 'client',
    children: [
      {
        path: 'produit',
        children: [
          {
            path: '',
            component:  ProduitsComponent,
          },
          {
            path: ':id',
            component: ProduitDetailsComponent
          }
        ]
      },
      {
        path: 'connexion',
        component: ConnexionComponent
      },
      {
        path: 'compte',
        children: [
          {
            path: "creer",
            component: CreateCompteComponent
          },
          {
            path: "monCompte",
            component: CompteComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
