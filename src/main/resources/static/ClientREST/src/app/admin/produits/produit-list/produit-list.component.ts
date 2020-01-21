import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Produit} from "../model/produits";
import {ProduitService} from "../produitService/produit.service";

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {

  produit: Observable<Produit[]>;
  p: number = 1;
  constructor(private produitService:ProduitService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.produit = this.produitService.getProduitList();
  }

  deleteProduit(id: number) {
    this.produitService.deleteProduit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateProduit(id: number) {
    this.router.navigate(['admin/produit/update', id]);
  }

  addProduit() {
    this.router.navigate(['admin/produit/add']);
  }
}
