import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private BASE_URL = "http://localhost:8888/api";
  private CLIENT_URL = `${this.BASE_URL}\\clients` ;
  private UPDATE_CLIENT_URL = `${this.BASE_URL}\\clients\\update\\`;
  private DELETE_CLIENT_URL = `${this.BASE_URL}\\clients\\delete\\`;

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<any> {
    return this.http.get(`${this.CLIENT_URL}/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.CLIENT_URL}`, client);
  }

  updateClient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.UPDATE_CLIENT_URL}/${id}`, value);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.DELETE_CLIENT_URL}/${id}`, { responseType: 'text' });
  }

  getClientList(): Observable<any> {
    return this.http.get(this.CLIENT_URL);
  }
}
