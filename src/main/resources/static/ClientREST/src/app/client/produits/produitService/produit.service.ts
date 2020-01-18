import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private BASE_URL = "http://localhost:8888/api";
  private PRODUIT_URL = `${this.BASE_URL}\\produits` ;
  constructor(private http: HttpClient) { }
  getProduit(id: number): Observable<any> {
    return this.http.get(`${this.PRODUIT_URL}/${id}`);
  }
}
