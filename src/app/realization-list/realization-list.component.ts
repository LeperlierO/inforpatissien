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

  constructor(private realizationService: RealizationService, private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd && val.url.includes("/page/")){
        let page = this.route.snapshot.paramMap.get('page') ?? 1;
        if(this.current != page)this.getRealizations(+page);
      }
  });
  }

  ngOnInit(): void {
    window.scroll(0,0);
    let page = this.route.snapshot.paramMap.get('page') ?? 1;
    this.getRealizations(+page);
  }

  getRealizations(page: number, search: string = ''){

    this.realizationService.getRealizations(page, search)
    .subscribe({
      next: (response) => {
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

  filterRealizations(event: any){
    this.getRealizations(1, event.target.value ?? '')
  }

}
