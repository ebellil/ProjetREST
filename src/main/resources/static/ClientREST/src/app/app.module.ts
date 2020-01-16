import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoriesComponent } from './categories/categories.component';
import {FormsModule} from "@angular/forms";
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    NavigationComponent,
    CategoriesComponent,
    CategorieListComponent
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
