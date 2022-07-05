import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MiniRecipe, MiniRecipeResponse } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes!: MiniRecipe[];
  current!: number;
  size!: number;
  error = '';

  constructor(private recipeService: RecipeService, private router: Router) { }

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
        window.scroll(0,0);
      },
      error: (error) => {
        this.error = error;
      }
    })
    
  }

  goDetails(id: number){
    this.router.navigate(['/recettes/' + id])
  }

}
