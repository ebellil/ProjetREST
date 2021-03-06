import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from "@angular/forms";
import { CategorieListComponent } from './admin/categories/categorie-list/categorie-list.component';
import { CreateCategorieComponent } from './admin/categories/create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './admin/categories/update-categorie/update-categorie.component';
import { ProduitListComponent } from './admin/produits/produit-list/produit-list.component';
import { CreateProduitComponent } from './admin/produits/create-produit/create-produit.component';
import { UpdateProduitComponent } from './admin/produits/update-produit/update-produit.component';
import { ClientListComponent } from './admin/client/client-list/client-list.component';
import { UpdateClientComponent } from './admin/client/update-client/update-client.component';
import { CreateClientComponent } from './admin/client/create-client/create-client.component';
import { ProduitsComponent } from './client/produits/produits.component';
import {NavigationClientComponent} from "./client/navigation-client/navigation-client.component";
import { ProduitDetailsComponent } from './client/produits/produit-details/produit-details.component';
import {NavigationAdminComponent} from "./admin/navigation/navigation-admin.component";
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import {ConnexionComponent} from "./connexion/connexion.component";
import { CompteComponent } from './client/compte/compte-details/compte.component';
import { CreateCompteComponent } from './client/compte/create-compte/create-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorieListComponent,
    CreateCategorieComponent,
    UpdateCategorieComponent,
    ProduitListComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    ClientListComponent,
    UpdateClientComponent,
    CreateClientComponent,
    ProduitsComponent,
    NavigationAdminComponent,
    NavigationClientComponent,
    ProduitDetailsComponent,
    HomeAdminComponent,
    ConnexionComponent,
    CompteComponent,
    CreateCompteComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
