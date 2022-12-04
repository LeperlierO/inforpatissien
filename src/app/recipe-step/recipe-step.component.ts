import { Component, Input, OnInit } from '@angular/core';
import { Ingredient, Step } from '../models/recipe';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  @Input() step!: Step;
  @Input() recipeIngredients!: Ingredient[];
  margin!: number;
  displayIngredients: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.margin = this.step.order == 1 ? 0 : 100;
  }

  displayModalIngredients(active: Boolean){
    this.displayIngredients = active;
  }

  closeModalIngredients(success: Boolean){
    this.displayModalIngredients(false);
    if(!this.step.success) this.step.success = success;
  }
  

}
