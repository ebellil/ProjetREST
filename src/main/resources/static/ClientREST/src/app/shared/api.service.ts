import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produits} from "../produits/model/produits";
import {Categories} from "../categories/model/categories";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8888/api";
  //PRODUITS
  private ALL_PRODUITS_URL = `${this.BASE_URL}\\produits` ;
  private SAVE_UPDATE_PRODUIT = `${this.BASE_URL}\\produits`;
  //CATEGORIES
  private ALL_CATEGORIES_URL = `${this.BASE_URL}\\categories` ;
  private SAVE_UPDATE_CATEGORIE = `${this.BASE_URL}\\categories`;
  private UPDATE_CATEGORIE = `${this.BASE_URL}\\categories\\update`;
  private DELETE_CATEGORIE_URL = `${this.BASE_URL}\\categories\\delete\\`;

  constructor(private http:HttpClient) { }

  getAllProduits() : Observable<Produits[]>{
    return this.http.get<Produits[]>(this.ALL_PRODUITS_URL);
  }

  postProduit(produit : Produits): Observable<Produits>{
    console.log(produit)
    console.log(this.SAVE_UPDATE_PRODUIT)
    return this.http.post<Produits>(this.SAVE_UPDATE_PRODUIT, produit);
  }

  //CATEGORIE
  getAllCategories() : Observable<Categories[]>{
    return this.http.get<Categories[]>(this.ALL_CATEGORIES_URL);
  }

  postCategorie(categorie : Categories): Observable<Categories>{
    return this.http.post<Categories>(this.SAVE_UPDATE_CATEGORIE, categorie);
  }

  updateCategorie(id : number, categorie : Categories): Observable<Categories>{
    return this.http.put<Categories>(`${this.UPDATE_CATEGORIE}/${id}`, categorie);
  }

  deleteCategorie(id : number): Observable<any>{
    return this.http.delete<Categories>(this.DELETE_CATEGORIE_URL + id);
  }
}
