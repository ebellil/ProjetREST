import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categorie} from "../model/categorie";
import {CategorieService} from "../categorieService/categorie.service";

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.scss']
})
export class CreateCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie();
  submitted = false;
  constructor(private categorieService: CategorieService, private router : Router) { }

  ngOnInit() {
  }

  newCategorie(): void {
    this.submitted = false;
    this.categorie = new Categorie();
  }

  save() {
    this.categorieService.createCategorie(this.categorie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.categorie = new Categorie();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admin/categorie']);
  }

}
