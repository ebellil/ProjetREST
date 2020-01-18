import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Produit} from "../../admin/produits/model/produits";
import {ProduitService} from "../../admin/produits/produitService/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  produit: Observable<Produit[]>;
  p: number = 1;
  constructor(private produitService:ProduitService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produit = this.produitService.getProduitList();
  }

  produitDetails(id: number){
    this.router.navigate(['client/produit', id]);
  }

}
