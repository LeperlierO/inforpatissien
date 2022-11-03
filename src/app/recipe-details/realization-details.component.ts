import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/realization';
import { RecipeService } from '../services/realization.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RealizationDetailsComponent implements OnInit {

  images: any[] = [];
  recipe!: Recipe;
  error = '';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let code = this.route.snapshot.paramMap.get('code');
    this.getRecipe(code ?? "");
  }

  getRecipe(code: string){

    window.scroll(0,0);

    // call api if necessary
    if(this.recipeService.recipesPage == undefined || this.recipeService.recipesPage == null || this.recipeService.recipesPage.data.find(r => r.code == code) == undefined){
      this.recipeService.getRecipe(code)
      .subscribe({
        next: (response) => {
          this.recipe = response;
          this.recipe.mainPhoto = response.photos.find(p => p.main)!;
          this.images = response.photos.map((img) => ({path: img.url}))
        },
        error: (error) => {
          this.error = error;
        }
      })
    }else{
      this.recipe = this.recipeService.recipesPage.data.find(r => r.code == code)!;
      this.images = this.recipe.photos.map((img) => ({path: img.url}));
    }

    console.log(this.recipe);
    
  }

}
