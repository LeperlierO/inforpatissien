import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../models/environment ';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipePath = '/recipes'

  constructor(private http: HttpClient) { }

  getRecipe(id: number): Observable<Recipe>{
    return this.http
      .get<Recipe>(
        `${environment.apiURL}${this.recipePath}/` + id
      );
  }
}
