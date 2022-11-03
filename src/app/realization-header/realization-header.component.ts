import { Component, Input, OnInit } from '@angular/core';
import { MiniRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-header',
  templateUrl: './realization-header.component.html',
  styleUrls: ['./realization-header.component.css']
})
export class RealizationHeaderComponent implements OnInit {

  @Input() realization!: Realization;
  
  constructor() { }

  ngOnInit(): void {
  }

}
