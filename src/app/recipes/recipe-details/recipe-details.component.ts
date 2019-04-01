import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Ingredient } from "./../../shared/ingredient.model";
import { RecipeService } from "./../../shared/recipe.service";
import * as ShoppingListActions from "./../../shopping-list/store/shopping-list.actions";
import * as fromApp from "../../shared/store/app.reducers";
import { Recipe } from "./../recipe-list/recipe-item/recipe.model";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  recipeId: number;
  subscription: Subscription;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
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
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeId);
  }
}
