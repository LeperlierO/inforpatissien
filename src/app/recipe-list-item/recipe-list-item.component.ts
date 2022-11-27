import { Component, Input, OnInit, Output } from '@angular/core';
import { MiniRecipe } from '../models/recipe';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() recipe!: MiniRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}
