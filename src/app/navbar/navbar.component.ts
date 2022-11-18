import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: Token | null = null;

  constructor(private authService: AuthService, public router: Router) { 
  }

  ngOnInit(): void {
    this.authService.tokenSubject.subscribe(
      (token : Token | null) => {
        this.token = token;
      }
    )
  }

  disabledScroll(){
    let body = document.querySelector("body");
    if(body != null){
      body.style.position = body.style.position == 'fixed' ? '' : 'fixed';
      body.style.width = "100%";
    }
  }

  logout(){
    this.authService.logout();
    this.ngOnInit();
    this.router.navigate(["/"]);
  }

}
