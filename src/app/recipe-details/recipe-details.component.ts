import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

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

    if(this.recipeService.recipesPage != undefined && this.recipeService.recipesPage != null)
      this.recipe = this.recipeService.recipesPage.data.find(r => r.code == code)!;

    // call api if necessary
    if(this.recipe == undefined || this.recipe == null){
      this.recipeService.getRecipe(code)
      .subscribe({
        next: (response) => {
          this.recipe = response;
          this.images = response.photos.map((img) => ({path: img.url}))
        },
        error: (error) => {
          this.error = error;
        }
      })
    }else{
      this.images = this.recipe.photos.map((img) => ({path: img.url}));
    }
    
  }

}
