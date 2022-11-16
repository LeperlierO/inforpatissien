import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { toast } from 'bulma-toast';
import { BodyLogin, Token } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  localStorageKey = 'ifp-user';
  body: BodyLogin = new BodyLogin();
  login = '';
  password = '';

  constructor(private authService: AuthService,  public router: Router) { }

  ngOnInit(): void {
    if(this.authService.tokenValue) this.router.navigate(['/']);
    window.scroll(999,999);
  }

  tryLogin(){
    this.authService.login(this.body).subscribe(
      (token: Token | null) => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(token));
        this.router.navigate(["/"]);
      },
      error => {
        toast({ message: error.error, type: 'is-danger', position:'top-center' });
      }
    );
  }

}
