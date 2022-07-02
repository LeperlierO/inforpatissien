import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  serverUrl = 'https://inforpatissien-api.azurewebsites.net'
  recipePath = '/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http
      .get<Recipe[]>(
        `${this.serverUrl}${this.recipePath}`
      );
  }
}
