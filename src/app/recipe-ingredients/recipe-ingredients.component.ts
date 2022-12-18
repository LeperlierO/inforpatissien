import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient, Step } from '../models/recipe';
import { toast } from 'bulma-toast';
import { AuthService } from '../services/auth.service';
import { Token } from '../models/auth';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {
  
  token: Token | null = null;

  @Input() recipeIngredients!: Ingredient[];
  @Input() step!: Step; 
  @Output() closeEvent = new EventEmitter<boolean>();
  selectedIngredients: Ingredient[] = [];
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )
   
  }

  clickIngredient(ingredient: Ingredient){
    if(!this.step.success){
      if(this.selectedIngredients.includes(ingredient)){
        let index = this.selectedIngredients.indexOf(ingredient);
        this.selectedIngredients.splice(index, 1);
      }else{
        this.selectedIngredients.push(ingredient);
      }
    }
  }

  closeModal(){
    this.closeEvent.emit(false);
  }

  validationIngredients(){
    let missingIngredients = this.step.ingredients.filter(i => this.selectedIngredients.find(ii => ii.id == i.id) == null);
    let excessIngredients = this.selectedIngredients.filter(i => this.step.ingredients.find(ii => ii.id == i.id) == null);

    if(missingIngredients.length > 0 || excessIngredients.length > 0){
      toast({ message: 'Des ingrédients sont manquants ou en trop', type: 'is-danger', position:'top-center', duration:3000 });
    }else{
      toast({ message: 'Bravo, l\'étape '+this.step.order+' est terminée avec succès !', type: 'is-success', position:'top-center', duration:3000 });
      this.closeEvent.emit(true);
    }
  }

}
