import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Step } from '../models/recipe';

@Component({
  selector: 'app-recipe-chronology',
  templateUrl: './recipe-chronology.component.html',
  styleUrls: ['./recipe-chronology.component.css']
})
export class RecipeChronologyComponent implements OnInit {

  checked: Boolean = false;
  @Output() checkEvent = new EventEmitter<boolean>();

  @Input() step!: Step;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.checked = !this.checked;
    this.checkEvent.emit(this.checked as boolean);
  }

}
