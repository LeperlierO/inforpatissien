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
    let code = this.route.snapshot.paramMap.get('code');
    this.getRealization(code ?? "");
  }

  getRealization(code: string){

    window.scroll(0,0);

    // call api if necessary
    if(this.realizationService.realizationsPage == undefined || this.realizationService.realizationsPage == null || this.realizationService.realizationsPage.data.find(r => r.code == code) == undefined){
      this.realizationService.getRealization(code)
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
      this.realization = this.realizationService.realizationsPage.data.find(r => r.code == code)!;
      this.images = this.realization.photos.map((img) => ({path: img.url}));
    }

    console.log(this.realization);
    
  }

}
