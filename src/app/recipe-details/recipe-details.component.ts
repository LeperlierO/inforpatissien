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

  displayCongrats: Boolean = false;
  currentCheck = 0;
  recipe!: Recipe;
  error = '';

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0);

    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) this.getRecipe(+id);
  }

  getRecipe(id: number){
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

  successItems(){
    this.currentCheck += 1
    this.tryDisplayModalCongrats();
  }

  tryDisplayModalCongrats(){
    if(this.currentCheck == this.recipe.steps.length){
      this.playSound();
      this.displayModalCongrats(true);
    }
  }

  displayModalCongrats(active: boolean){
    this.displayCongrats = active;
  }

  playSound(){
    var audio = new Audio('../assets/sounds/sound2.m4a');
    //audio.play();
  }
}
