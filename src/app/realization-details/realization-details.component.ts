import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Realization } from '../models/realization';
import { RealizationService } from '../services/realization.service';
import { broComments, Comment, dadComments, mumComments, sisComments } from '../models/comment';
import { User } from '../models/auth';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Token } from '../models/auth';

@Component({
  selector: 'app-realization-details',
  templateUrl: './realization-details.component.html',
  styleUrls: ['./realization-details.component.css']
})
export class RealizationDetailsComponent implements OnInit {

  token: Token | null = null;
  comments: Comment[] = [];
  realization!: Realization;
  error = '';

  constructor(private realizationService: RealizationService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )

    let id = this.route.snapshot.paramMap.get('id');

    if(id != null) this.getRealization(+id);

    this.comments = this.getComments();
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

  getComments(){
    switch(this.token?.userName) { 
      case "Dominique": { 
         return dadComments; 
      } 
      case "Pascale": { 
        return mumComments; 
      } 
      case "Eva": { 
        return sisComments; 
      }
      default: { 
        return broComments; 
      } 
   } 
  }

}
