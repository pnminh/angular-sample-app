import { Action } from '@ngrx/store';

import { Recipe } from './../recipe-list/recipe-item/recipe.model';

export const START_RECIPES_FETCHING = "START_RECIPES_FETCHING";
export const FINISH_RECIPES_FETCHING = "FINISH_RECIPES_FETCHING";
export const ADD_RECIPE = "ADD_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const START_RECIPES_PERSISTING = "START_RECIPES_PERSISTING";
export const FINISH_RECIPES_PERSISTING = "FINISH_RECIPES_PERSISTING";
export const START_EDIT_RECIPE = "START_EDIT_RECIPE";
export const STOP_EDIT_RECIPE = "STOP_EDIT_RECIPE";
export class StartRecipesFetching implements Action {
  readonly type = START_RECIPES_FETCHING;
}
export class FinishRecipesFetching implements Action {
  readonly type = FINISH_RECIPES_FETCHING;
  constructor(public payload: Recipe[]) {}
}
export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { id: number; recipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}
export class StartRecipesPersisting implements Action {
  readonly type = START_RECIPES_PERSISTING;
}
export class FinishRecipesPersisting implements Action {
  readonly type = FINISH_RECIPES_PERSISTING;
}
export class StartEditRecipe implements Action {
  readonly type = START_EDIT_RECIPE;
  constructor(public payload: number) {}
}
export class StopEditRecipe implements Action {
  readonly type = STOP_EDIT_RECIPE;
}
export type RecipesActions =
  | StartRecipesFetching
  | FinishRecipesFetching
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe
  | StartRecipesPersisting
  | FinishRecipesPersisting
  | StartEditRecipe
  | StopEditRecipe;
