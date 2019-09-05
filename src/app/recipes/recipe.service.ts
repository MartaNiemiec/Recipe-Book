import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428928_960_720.jpg'
    ),
    new Recipe(
      'A test recipe2',
      'This is simply a test2',
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428928_960_720.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice(); // slice to get only a copy of the recipes array
  }
}
