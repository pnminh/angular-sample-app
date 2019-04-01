import { Store } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as RecipesActions from "./recipes.actions";
import * as fromRecipes from "./recipes.reducers";
import { switchMap, map, withLatestFrom } from "rxjs/operators";
import { Recipe } from "../recipe-list/recipe-item/recipe.model";
@Injectable()
export class RecipesEffect {
  private firebaseDbUrl = "https://ng-recipe-b4231.firebaseio.com";
  recipesCollectionName = "recipes";
  constructor(
    private action$: Actions,
    private httpClient: HttpClient,
    private recipesStore: Store<fromRecipes.FeatureState>
  ) {}
  @Effect()
  fetchRecipes = this.action$.pipe(
    ofType(RecipesActions.START_RECIPES_FETCHING),
    switchMap((action: RecipesActions.StartRecipesFetching) =>
      this.httpClient.get<Recipe[]>(
        `${this.firebaseDbUrl}/${this.recipesCollectionName}.json`
      )
    ),
    map(
      (recipes: Recipe[]) => new RecipesActions.FinishRecipesFetching(recipes)
    )
  );
  @Effect({ dispatch: false })
  persistRecipes = this.action$.pipe(
    ofType(RecipesActions.START_RECIPES_PERSISTING),
    withLatestFrom(
      this.recipesStore
        .select("recipes")
        .pipe(
          map((recipesState: fromRecipes.RecipesState) => recipesState.recipes)
        )
    ),
    switchMap(
      ([action, recipes]) =>this.httpClient.put<Recipe[]>(
        `${this.firebaseDbUrl}/${this.recipesCollectionName}.json`,
        recipes
      ))
  );
}
