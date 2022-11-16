import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { BodyLogin, Token } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorageKey = 'ifp-user';
  serverUrl = 'https://inforpatissien-api.azurewebsites.net';

  public tokenSubject: BehaviorSubject<Token | null>;

  constructor(private http: HttpClient) {
    let tokenJSON = localStorage.getItem(this.localStorageKey);

    this.tokenSubject = new BehaviorSubject<Token | null>(
      tokenJSON ? JSON.parse(tokenJSON) : null
    );
  }

  public get tokenValue(): Token | null{
    return this.tokenSubject.value;
  }

  isConnected(){
    let user = localStorage.getItem(this.localStorageKey);
    return user != null;
  }

  login(body: BodyLogin):Observable<Token>{
    return this.http
    .post<Token>(
      `${this.serverUrl}/login`,
      body
    ).pipe(
      map((token: Token) => {
        this.tokenSubject.next(token);
        return token;
      })
    );
  }

  logout(){
    this.tokenSubject.next(null);
    localStorage.removeItem(this.localStorageKey);
  }
}
