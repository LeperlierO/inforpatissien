import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  // Permet de gérer les erreurs de champs obligatoires
  loginForm: FormGroup | any;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor(private authService: AuthService,  public router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    if(this.authService.tokenValue) this.router.navigate(['/']);
    this.initForm();
    window.scroll(999,999);
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password : this.password,
    })
  }

  login(){
    const formValue = this.loginForm?.value;
    const body = new BodyLogin();
    body.email = formValue['email'];
    body.password = formValue['password'];

    this.authService.login(body).subscribe(
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
