import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produits} from "./model/produits";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  produits:Produits[] = [];
  p: number = 1;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAllProduits();
  }

  public getAllProduits(){

    this.apiService.getAllProduits().subscribe(
      res=>{
        this.produits = res;
      },
      err =>{
        alert("error produits component");
      }
    );
  }

  getProduitById(id){

  }

  createProduit(){
    let newProduit:Produits = {
      idProduit: 199,
      designation:'string',
      prix:1000,
      quantite:1050,
      photo:'string'
    };

    this.apiService.postProduit(newProduit).subscribe(
      res=>{
        if(res != null){
          newProduit.idProduit = res.idProduit;
        }
        this.produits.push(newProduit);
      },
      err=>{alert("error add produit");
        console.log(newProduit);}
    );
  }
}
