import { ThisReceiver } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MiniRecipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  error!: string;
  recipes!: MiniRecipe[];
  filteredRecipes!: MiniRecipe[];

  currentDifficulty!: number;
  currentSearch!: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.currentSearch = '';
    this.currentDifficulty = 0;
    this.getRecipes();
  }

  getRecipes(){

    window.scroll(0,0);
    
    this.recipeService.getMiniRecipes()
    .subscribe({
      next: (response) => {
        this.recipes = response;
        this.filteredRecipes = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }

  filterRecipes(difficulty: number | null, search: string | null){
    if(difficulty != null) this.currentDifficulty = difficulty;
    if(search != null) this.currentSearch = search;

    console.log("Difficulty : " + this.currentDifficulty + " | Search : " + this.currentSearch);
    
    console.log(this.recipes);

    this.filteredRecipes = this.currentDifficulty > 0 ? this.recipes.filter(r => r.difficulty.id == difficulty) : this.recipes;
    console.log(this.filteredRecipes);
    
    this.filteredRecipes = this.filteredRecipes.filter(r => r.name.toLowerCase().includes(this.currentSearch.toLocaleLowerCase()));
    console.log(this.filteredRecipes);
  }

}
