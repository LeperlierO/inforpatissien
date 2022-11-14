import { Component, Input, OnInit } from '@angular/core';
import { MiniRealization } from '../models/realization';

@Component({
  selector: 'app-settings-item',
  templateUrl: './settings-item.component.html',
  styleUrls: ['./settings-item.component.css']
})
export class SettingsItemComponent implements OnInit {

  @Input() realization!: MiniRealization;
  
  constructor() { }

  ngOnInit(): void {
  }

}
