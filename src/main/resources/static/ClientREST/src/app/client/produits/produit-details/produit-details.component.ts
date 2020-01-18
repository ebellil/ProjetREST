import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../../../admin/produits/model/produits";
import {ProduitService} from "../produitService/produit.service";

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.scss']
})
export class ProduitDetailsComponent implements OnInit {
  id: number;
  produit: Produit;

  constructor(private route: ActivatedRoute,private router: Router,
              private produitService: ProduitService) { }

  ngOnInit() {
    this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];

    this.produitService.getProduit(this.id)
      .subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
  }

}
