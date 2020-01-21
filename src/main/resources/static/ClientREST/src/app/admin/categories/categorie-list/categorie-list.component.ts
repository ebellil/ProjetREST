import { Component, OnInit } from '@angular/core';
import {Categorie} from "../model/categorie";
import {Router} from "@angular/router";
import {CategorieService} from "../categorieService/categorie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  categorie: Observable<Categorie[]>;
  p: number = 1;
  constructor(private categorieService:CategorieService, private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.categorie = this.categorieService.getCategorieList();
  }

  deleteCategorie(id: number) {
    this.categorieService.deleteCategorie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCategorie(id: number) {
    this.router.navigate(['admin/categorie/update', id]);
  }

  addCategorie() {
    this.router.navigate(['admin/categorie/add']);
  }
}
