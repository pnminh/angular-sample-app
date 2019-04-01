import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";

import * as fromApp from "../../shared/store/app.reducers";
import * as fromRecipes from "../store/recipes.reducers";
import { Ingredient } from "./../../shared/ingredient.model";
import * as ShoppingListActions from "./../../shopping-list/store/shopping-list.actions";
import { Recipe } from "./../recipe-list/recipe-item/recipe.model";
import * as RecipesActions from "./../store/recipes.actions";

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
    /* private recipeService: RecipeService, */
    private store: Store<fromApp.AppState>,
    private recipesStore: Store<fromRecipes.FeatureState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      //this.recipe = this.recipeService.getRecipe(params.id);

      this.recipeId = params.id;
      this.recipesStore.dispatch(
        new RecipesActions.StartEditRecipe(this.recipeId)
      );
    });
    /* this.subscription = this.recipeService.getRecipes().subscribe(recipes => {
      this.recipe = recipes.slice(this.recipeId, this.recipeId + 1)[0];
    }); */

    this.subscription = this.recipesStore
      .select("recipes")
      .pipe(
        map(
          (recipesState: fromRecipes.RecipesState) =>
            recipesState.recipes[this.recipeId]
        )
      )
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }
  deleteRecipe() {
    //this.recipeService.deleteRecipe(this.recipeId);
    this.recipesStore.dispatch(new RecipesActions.DeleteRecipe(this.recipeId));
  }
}
