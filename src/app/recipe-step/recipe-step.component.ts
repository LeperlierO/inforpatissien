import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Token } from '../models/auth';
import { Ingredient, Step } from '../models/recipe';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  token: Token | null = null;

  @Output() successStep = new EventEmitter();
  @Input() step!: Step;
  @Input() recipeIngredients!: Ingredient[];
  margin!: number;
  displayIngredients: Boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.margin = this.step.order == 1 ? 0 : 100;

    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )
  }

  displayModalIngredients(active: Boolean){
    this.displayIngredients = active;
  }

  closeModalIngredients(success: Boolean){
    this.displayModalIngredients(false);
    if(!this.step.success) this.step.success = success;
    if(success) this.successStep.emit();
  }
  

}
