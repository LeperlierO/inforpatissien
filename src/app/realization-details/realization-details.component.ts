import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-details',
  templateUrl: './realization-details.component.html',
  styleUrls: ['./realization-details.component.css']
})
export class RealizationDetailsComponent implements OnInit {

  realization!: Realization;
  error = '';

  constructor(private realizationService: RealizationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) this.getRealization(+id);
  }

  getRealization(id: number){

    window.scroll(0,0);

    this.realizationService.getRealization(id)
    .subscribe({
      next: (response) => {
        this.realization = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
    
  }

}
