import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from "@angular/forms";
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { CreateCategorieComponent } from './categories/create-categorie/create-categorie.component';
import { UpdateCategorieComponent } from './categories/update-categorie/update-categorie.component';
import { ProduitListComponent } from './produits/produit-list/produit-list.component';
import { CreateProduitComponent } from './produits/create-produit/create-produit.component';
import { UpdateProduitComponent } from './produits/update-produit/update-produit.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieListComponent,
    CreateCategorieComponent,
    UpdateCategorieComponent,
    ProduitListComponent,
    CreateProduitComponent,
    UpdateProduitComponent,
    ClientListComponent,
    UpdateClientComponent,
    CreateClientComponent
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
