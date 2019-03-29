import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Ingredient } from "./../../shared/ingredient.model";
import { RecipeService } from "./../../shared/recipe.service";
import { ShoppingListService } from "./../../shared/shopping-list.service";
import { Recipe } from "./../recipe-list/recipe-item/recipe.model";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  //@Input('chosenRecipe') chosenRecipe:Recipe
  recipe: Recipe;
  recipeId: number;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipe = this.recipeService.getRecipe(params.id);
      this.recipeId = params.id;
    });
    this.subscription = this.recipeService.getRecipes().subscribe(recipes => {
      this.recipe = recipes.slice(this.recipeId, this.recipeId + 1)[0];
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
  }
}
