import { Pipe, PipeTransform } from '@angular/core';
import { concat } from 'rxjs';
import { Token } from '../models/auth';
import { Ingredient, Step } from '../models/recipe';

@Pipe({
  name: 'recipeStepDescription',
  pure: false
})
export class RecipeStepDescriptionPipe implements PipeTransform {

  transform(description: string, step: Step, token: Token | null): string {
    let result = description;

    if(token?.difficulty == 3 && !step.success){
      step.ingredients.map(i => result = result.replace(new RegExp(i.name.toLocaleLowerCase(), "g"), '[...]'));
    }

    return result;
  }

}
