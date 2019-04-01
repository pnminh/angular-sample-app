import * as RecipesActions from "./../store/recipes.actions";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import * as fromRecipes from "../store/recipes.reducers";
import { Recipe } from "./recipe-item/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  constructor(
    /* private recipeService: RecipeService */ private recipesStore: Store<
      fromRecipes.FeatureState
    >
  ) {
    //this.recipes$ = this.recipeService.getRecipes();
    this.recipesStore.dispatch(new RecipesActions.StartRecipesFetching());
    this.recipes$ = this.recipesStore
      .select("recipes")
      .pipe(
        map((recipesState: fromRecipes.RecipesState) => recipesState.recipes)
      );
  }

  ngOnInit() {}
}
