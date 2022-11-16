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

  images: any[] = [];
  realization!: Realization;
  error = '';

  constructor(private realizationService: RealizationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) this.getRealization(+id);
  }

  getRealization(id: number){

    window.scroll(0,0);

    // call api if necessary
    if(this.realizationService.realizationsPage == undefined || this.realizationService.realizationsPage == null || this.realizationService.realizationsPage.data.find(r => r.id == id) == undefined){
      this.realizationService.getRealization(id)
        .subscribe({
          next: (response) => {
            this.realization = response;
            this.realization.mainPhoto = response.photos.find(p => p.main)!;
            this.images = response.photos.map((img) => ({path: img.url}))
          },
          error: (error) => {
            this.error = error;
          }
        })
    }else{
      this.realization = this.realizationService.realizationsPage.data.find(r => r.id == id)!;
      this.images = this.realization.photos.map((img) => ({path: img.url}));
    }
    
  }

}
