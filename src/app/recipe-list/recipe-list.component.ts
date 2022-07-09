import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MiniRecipe, Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];
  current!: number;
  size!: number;
  error = '';

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd && val.url.includes("/page/")){
        let page = this.route.snapshot.paramMap.get('page') ?? 1;
        if(this.current != page)this.getRecipes(+page);
      }
  });
  }

  ngOnInit(): void {
    let page = this.route.snapshot.paramMap.get('page') ?? 1;
    this.getRecipes(+page);
  }

  getRecipes(page: number){

    if(this.recipeService.recipesPage != undefined && 
       this.recipeService.recipesPage != null &&
       this.recipeService.recipesPage.current == page)
    {
      this.recipes = this.recipeService.recipesPage.data;
      this.current = this.recipeService.recipesPage.current;
      this.size = this.recipeService.recipesPage.size;
    }
    else
    {
      this.recipeService.getRecipes(page)
      .subscribe({
        next: (response) => {
          response.data.forEach(r => r.mainPhoto = r.photos.find(p => p.main)!);
          
          this.recipes = response.data;
          this.current = response.current;
          this.size = response.size;
          this.recipeService.recipesPage = response;
          window.scroll(0,0);
        },
        error: (error) => {
          this.error = error;
        }
      })
    }

    
    
  }

}
