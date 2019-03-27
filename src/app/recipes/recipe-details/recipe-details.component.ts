import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../../shared/recipe.service';
import { ShoppingListService } from './../../shared/shopping-list.service';
import { Recipe } from './../recipe-list/recipe-item/recipe.model';

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  //@Input('chosenRecipe') chosenRecipe:Recipe
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(params.id);
    });
  }
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
