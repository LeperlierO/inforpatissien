import { Component, Input, OnInit } from '@angular/core';
import { MiniRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css']
})
export class RecipeHeaderComponent implements OnInit {

  @Input() recipe!: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
