import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produits} from "../produits/model/produits";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8888/api";
  private ALL_PRODUITS_URL = `${this.BASE_URL}\\produits` ;

  constructor(private http:HttpClient) { }

  getAllProduits() : Observable<Produits[]>{
    return this.http.get<Produits[]>(this.ALL_PRODUITS_URL);
  }
}
