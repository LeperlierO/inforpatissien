import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token, User } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token: Token | null = null;
  gamers!: User[];
  
  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.getGamers();
  }

  getGamers(){
    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )
    
    this.authService.getGamers()
    .subscribe({
      next: (response) => {
        console.log(response);
        this.gamers = response;
      }
    })
  }



}
