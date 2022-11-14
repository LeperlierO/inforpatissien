import { Component, OnInit } from '@angular/core';
import { MiniRealization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  realizations!: MiniRealization[];
  error: any;

  modalIsActive!: boolean;

  constructor(private realizationService: RealizationService) { }

  ngOnInit(): void {
    this.getMiniRealizations();
  }

  getMiniRealizations(){
    this.realizationService.getMiniRealizations()
    .subscribe({
      next: (response) => {
        this.realizations = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }

  displayModal(active: boolean){
    this.modalIsActive = active;
    if(!active) this.getMiniRealizations();
  }


}
