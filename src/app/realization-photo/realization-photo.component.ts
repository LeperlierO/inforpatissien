import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../models/photo';

@Component({
  selector: 'app-realization-photo',
  templateUrl: './realization-photo.component.html',
  styleUrls: ['./realization-photo.component.css']
})
export class RealizationPhotoComponent implements OnInit {

  @Input() photo!: Photo;
  modalIsActive: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
