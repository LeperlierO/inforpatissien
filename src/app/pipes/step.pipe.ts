import { Pipe, PipeTransform } from '@angular/core';
import { Step } from '../models/recipe';

@Pipe({
  name: 'step'
})
export class StepPipe implements PipeTransform {

  transform(steps: Step[], peer: Boolean): Step[] {
    let result = peer ? 0 : 1;
    return steps.filter(s => s.order%2==result);
  }

}
