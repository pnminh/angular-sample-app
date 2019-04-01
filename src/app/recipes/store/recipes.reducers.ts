import { Recipe } from "./../recipe-list/recipe-item/recipe.model";
import * as RecipesActions from "./recipes.actions";
export interface RecipesState {
  recipes: Recipe[];
  selectedRecipeId: number;
}
export interface FeatureState {
  recipes: RecipesState;
}
const initialState: RecipesState = {
  recipes: [],
  selectedRecipeId: null
};
export function recipesReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.FINISH_RECIPES_FETCHING:
      return { ...state, recipes: [...action.payload] };
    case RecipesActions.ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case RecipesActions.UPDATE_RECIPE: {
      const existingRecipe = state.recipes[action.payload.id];
      const newRecipe = { ...existingRecipe, ...action.payload.recipe };
      const recipes = [...state.recipes];
      recipes[action.payload.id] = newRecipe;
      return { ...state, recipes };
    }
    case RecipesActions.DELETE_RECIPE: {
      const newRecipes = [...state.recipes];
      newRecipes.splice(action.payload, 1);
      return { ...state, recipes: newRecipes, selectedRecipeId: null };
    }
    case RecipesActions.START_EDIT_RECIPE:
      return { ...state, selectedRecipeId: action.payload };
    case RecipesActions.STOP_EDIT_RECIPE:
      return { ...state, selectedRecipeId: null };
    default:
      return state;
  }
}
