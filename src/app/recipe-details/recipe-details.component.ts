import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;
  error = '';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) this.getRecipe(+id);
  }

  getRecipe(id: number){

    window.scroll(0,0);

    this.recipeService.getRecipe(id)
    .subscribe({
      next: (response) => {
        this.recipe = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }

}
