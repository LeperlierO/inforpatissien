import { Component, OnInit } from '@angular/core';
import { Token } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  modalIsActive: Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    window.scroll(0,0);
    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        if(token != null) this.modalIsActive = token.gamer;
      }
    )
  }

  displayModal(active: boolean){
    this.modalIsActive = active;
  }

}
