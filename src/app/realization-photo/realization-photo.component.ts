import { Component, Input, OnInit } from '@angular/core';
import { RealizationPhoto } from '../models/realization';

@Component({
  selector: 'app-realization-photo',
  templateUrl: './realization-photo.component.html',
  styleUrls: ['./realization-photo.component.css']
})
export class RealizationPhotoComponent implements OnInit {

  @Input() photo!: RealizationPhoto;
  modalIsActive: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
