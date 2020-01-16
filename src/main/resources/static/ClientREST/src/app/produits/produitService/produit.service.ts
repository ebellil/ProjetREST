import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../model/produits";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private BASE_URL = "http://localhost:8888/api";
  private PRODUIT_URL = `${this.BASE_URL}\\produits` ;
  private UPDATE_PRODUIT_URL = `${this.BASE_URL}\\produits\\`;
  private DELETE_PRODUIT_URL = `${this.BASE_URL}\\produits\\delete\\`;

  constructor(private http: HttpClient) { }

  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.PRODUIT_URL}/${id}`);
  }

  createProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.PRODUIT_URL}`, produit);
  }

  updateProduit(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.UPDATE_PRODUIT_URL}/${id}`, value);
  }

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(`${this.DELETE_PRODUIT_URL}/${id}`, { responseType: 'text' });
  }

  getProduitList(): Observable<any> {
    return this.http.get(`${this.PRODUIT_URL}`);
  }
}
