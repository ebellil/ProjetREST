import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Produit} from "../model/produits";
import {ProduitService} from "../produitService/produit.service";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {

  id: number;
  produit : Produit

  constructor(private route: ActivatedRoute,private router: Router,
              private produitService: ProduitService)  { }

  ngOnInit() {

    this.produit = new Produit();

    this.id = this.route.snapshot.params['id'];

    this.produitService.getProduit(this.id).subscribe(data => {
        console.log(data)
        this.produit = data;
      }, error => console.log(error));
  }

  updateProduit() {
    this.produitService.updateProduit(this.id, this.produit).subscribe(data => console.log(data), error => console.log(error));
    this.produit = new Produit();
    this.gotoList();
  }


  onSubmit() {
    this.updateProduit();
  }

  gotoList() {
    this.router.navigate(['/produit']);
  }
}
