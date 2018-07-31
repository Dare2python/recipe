import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id: number = this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipe(id);
  }

}