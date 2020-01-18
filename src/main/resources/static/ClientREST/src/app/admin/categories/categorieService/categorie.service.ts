import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Categorie} from "../model/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private BASE_URL = "http://localhost:8888/api";
  private CATEGORIE_URL = `${this.BASE_URL}\\categories` ;
  private UPDATE_CATEGORIE_URL = `${this.BASE_URL}\\categories\\update`;
  private DELETE_CATEGORIE_URL = `${this.BASE_URL}\\categories\\delete\\`;


  constructor(private http: HttpClient) { }

  getCategorie(id: number): Observable<any> {
    return this.http.get(`${this.CATEGORIE_URL}/${id}`);
  }

  createCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.CATEGORIE_URL}`, categorie);
  }

  updateCategorie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.UPDATE_CATEGORIE_URL}/${id}`, value);
  }

  deleteCategorie(id: number): Observable<any> {
    return this.http.delete(`${this.DELETE_CATEGORIE_URL}/${id}`, { responseType: 'text' });
  }

  getCategorieList(): Observable<any> {
    return this.http.get(`${this.CATEGORIE_URL}`);
  }

}
