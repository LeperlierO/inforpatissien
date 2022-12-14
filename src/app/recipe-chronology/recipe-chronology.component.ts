import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Step } from '../models/recipe';

@Component({
  selector: 'app-recipe-chronology',
  templateUrl: './recipe-chronology.component.html',
  styleUrls: ['./recipe-chronology.component.css']
})
export class RecipeChronologyComponent implements OnInit {

  @Input() step!: Step;

  constructor() { }

  ngOnInit(): void {
  }

}
