import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categories} from "./model/categories";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories:Categories[] = [];
  p: number = 1;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  public getAllCategories(){

    this.apiService.getAllCategories().subscribe(
      res=>{
        console.log(res)
        this.categories = res;
      },
      err =>{
        alert("error categories component");
      }
    );
  }

  createCategorie(){
    let newCategorie:Categories = {
      idCategorie: 199,
      nomCategorie:'testNom',
      codeCategorie:"testCode"
    };

    this.apiService.postCategorie(newCategorie).subscribe(
      res=>{
        if(res != null){
          newCategorie.idCategorie = res.idCategorie;
        }
        this.categories.push(newCategorie);
      },
      err=>{alert("error add categorie");
        console.log(newCategorie);}
    );
  }

  updateCategorie(updateCategorie: Categories) {
    this.apiService.updateCategorie(updateCategorie.idCategorie, updateCategorie).subscribe(
      res=>{
        console.log(res)
      },
      err=>{alert("error add categorie");}
    );
  }

  deleteCategorie(categorie: Categories) {
    if(confirm('Suppression de la catégorie')){
      this.apiService.deleteCategorie(categorie.idCategorie).subscribe(
        res=>{
          let indexOfCategorie = this.categories.indexOf(categorie);
          this.categories.splice(indexOfCategorie, 1);
        },
        err=>{alert("Impossible de supprimer la catégorie");}
      );
    }
  }
}
