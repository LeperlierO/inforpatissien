import { Component, Input, OnInit } from '@angular/core';
import { MiniRecipe, Recipe } from '../models/realization';
import { RecipeService } from '../services/realization.service';

@Component({
  selector: 'app-recipe-header',
  templateUrl: './recipe-header.component.html',
  styleUrls: ['./recipe-header.component.css']
})
export class RealizationHeaderComponent implements OnInit {

  @Input() recipe!: Recipe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
