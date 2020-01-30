import { Component, OnInit } from '@angular/core';
import {Categorie} from "../model/categorie";
import {ActivatedRoute, Router} from "@angular/router";
import {CategorieService} from "../categorieService/categorie.service";

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss']
})
export class UpdateCategorieComponent implements OnInit {

  id: number;
  categorie : Categorie

  constructor(private route: ActivatedRoute,private router: Router,
              private categorieService: CategorieService)  { }

  ngOnInit() {

    this.categorie = new Categorie();

    this.id = this.route.snapshot.params['id'];

    this.categorieService.getCategorie(this.id)
      .subscribe(data => {
        console.log(data)
        this.categorie = data;
      }, error => console.log(error));
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.id, this.categorie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categorie = new Categorie();
    this.gotoList();
  }


  onSubmit() {
    this.updateCategorie();
  }

  gotoList() {
    this.router.navigate(['/admin/categorie']);
  }

}
