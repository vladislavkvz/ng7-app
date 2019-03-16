import { Recipe } from './recipe.model';
import { EventEmitter, Output } from '@angular/core';

export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Test Name 1',
          'Test Description 1 of my recipe',
          'https://thestayathomechef.com/wp-content/uploads/2018/02/Best-Brownies-1-small.jpg'
        ),
        new Recipe(
        'Test Name 2',
        'Test Description 2 of my recipe',
        'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02750-2%20BK_Web_DblQtrPndKing_500x540px_CR_0.png'
        )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
