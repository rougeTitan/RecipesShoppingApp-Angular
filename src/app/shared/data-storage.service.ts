import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, switchMap, take } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.authService.user.pipe(
      take(1),
      switchMap(user => {
        if (!user) return [];
        const token = user.token;
        const userId = user.id;
        let url = `https://recipe-book-project-78350-default-rtdb.firebaseio.com/recipes/${userId}.json`;
        if (token) {
          url += `?auth=${token}`;
        }
        return this.http.put(url, recipes);
      })
    ).subscribe(response => {
      console.log(response);
    });
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      switchMap(user => {
        if (!user) return [];
        const token = user.token;
        const userId = user.id;
        let url = `https://recipe-book-project-78350-default-rtdb.firebaseio.com/recipes/${userId}.json`;
        if (token) {
          url += `?auth=${token}`;
        }
        return this.http.get<Recipe[]>(url);
      }),
      map(recipes => {
        if (!recipes) return [];
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
