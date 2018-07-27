import { Recipe } from './recipe.model';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(
            'burger',
            'burger desc'
        ),
        new Recipe(
            'hot dog',
            'very hot desc'
        )
    ];
}
