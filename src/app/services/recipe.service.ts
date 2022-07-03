import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiniRecipeResponse } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  serverUrl = 'https://inforpatissien-api.azurewebsites.net'
  recipePath = '/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(page: number): Observable<MiniRecipeResponse>{
    let params = new HttpParams().set('page', page);
    return this.http
      .get<MiniRecipeResponse>(
        `${this.serverUrl}${this.recipePath}`, {params: params}
      );
  }
}
