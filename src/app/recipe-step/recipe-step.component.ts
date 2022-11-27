import { Component, Input, OnInit } from '@angular/core';
import { Step } from '../models/recipe';

@Component({
  selector: 'app-recipe-step',
  templateUrl: './recipe-step.component.html',
  styleUrls: ['./recipe-step.component.css']
})
export class RecipeStepComponent implements OnInit {

  @Input() step!: Step;
  margin!: number;
  
  constructor() { }

  ngOnInit(): void {
    this.margin = this.step.order == 1 ? 0 : 100;
  }

}
