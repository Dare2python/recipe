import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe(
            1,
            'burger',
            'burger desc'
        ),
        new Recipe(
            2,
            'hot dog',
            'very hot desc'
        )
    ];
    getRecipe(id: number) {
        const recipe = this.recipes.find(
            (r: Recipe) => r.id === id * 1
        );
        return recipe;
    }
}
