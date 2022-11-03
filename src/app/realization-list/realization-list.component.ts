import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MiniRealization, Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';

@Component({
  selector: 'app-realization-list',
  templateUrl: './realization-list.component.html',
  styleUrls: ['./realization-list.component.css']
})
export class RealizationListComponent implements OnInit {

  realizations!: Realization[];
  current!: number;
  size!: number;
  error = '';
  hover?: Realization;
  loader!: boolean;

  constructor(private realizationService: RealizationService, private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd && val.url.includes("/page/")){
        let page = this.route.snapshot.paramMap.get('page') ?? 1;
        if(this.current != page)this.getRealizations(+page);
      }
  });
  }

  ngOnInit(): void {
    this.hover = undefined;
    this.loader = true;
    let page = this.route.snapshot.paramMap.get('page') ?? 1;
    this.getRealizations(+page);

    setTimeout(() => {this.loader = false}, 2500);
  }

  getRealizations(page: number){

    window.scroll(0,0);
    
    if(this.realizationService.realizationsPage != undefined && 
       this.realizationService.realizationsPage != null &&
       this.realizationService.realizationsPage.current == page)
    {
      this.realizations = this.realizationService.realizationsPage.data;
      this.current = this.realizationService.realizationsPage.current;
      this.size = this.realizationService.realizationsPage.size;
    }
    else
    {
      this.realizationService.getRealizations(page)
      .subscribe({
        next: (response) => {
          response.data.forEach(r => r.mainPhoto = r.photos.find(p => p.main)!);
          
          this.realizations = response.data;
          this.current = response.current;
          this.size = response.size;
          this.realizationService.realizationsPage = response;
        },
        error: (error) => {
          this.error = error;
        }
      })
    }

    
    
  }

}
