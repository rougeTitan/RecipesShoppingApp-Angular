import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

    //gets the data of the selected recipe and display it in the
    //recipe detail area
    //reaplcing eventemitter with subject
    //recipeSelected = new EventEmitter<Recipe>();
    
    //no longer needed as we are not using eventemitter in recipe componenet
    //recipeSelected = new Subject<Recipe>();

    //dummy recipe

    //no longer needed since we are storing the data in db
    /*
    private recipes: Recipe[] = [
      new Recipe(
        'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
      new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ])
    ];*/

    private recipes: Recipe[] =[];
    constructor(private slService: ShoppingListService) {}


  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

    getRecipes(){
        //adding slice to get the copy of the array in that way 
        //we wont access the  original array directly
        return this.recipes.slice();
    }
    
    getRecipe(index: number) {
      return this.recipes[index];
    }

    
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
    
      deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}