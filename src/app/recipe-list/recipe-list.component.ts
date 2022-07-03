import { Component, OnInit } from '@angular/core';
import { MiniRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: MiniRecipe[] = [];
  current!: number;
  size!: number;
  error = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes(1);
  }

  getRecipes(page: number){

    this.recipeService.getRecipes(page)
    .subscribe({
      next: (response) => {
        this.recipes = response.data;
        this.current = response.current;
        this.size = response.size;
      },
      error: (error) => {
        this.error = error;
      }
    })
    
  }

}
