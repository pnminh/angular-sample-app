import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from "./shopping-list.actions";
const initialState: ShoppingListState = {
  ingredients: [new Ingredient("Apple", 1), new Ingredient("Mango", 2)],
  editId: null
};
export interface ShoppingListState {
  ingredients: Ingredient[];
  editId: number;
}
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    }
    case ShoppingListActions.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case ShoppingListActions.UPDATE_INGREDIENT: {
      const oldIngredient = state.ingredients[state.editId];
      const newIngredient = {
        ...oldIngredient,
        ...action.payload
      };
      const newIngredients = state.ingredients.slice();
      newIngredients[state.editId] = newIngredient;
      return { ...state, ingredients: newIngredients };
    }
    case ShoppingListActions.DELETE_INGREDIENT: {
      const newIngredients = state.ingredients.slice();
      newIngredients.splice(state.editId, 1);
      return { ...state, ingredients: newIngredients, editId: null };
    }
    case ShoppingListActions.START_EDIT: {
      return { ...state, editId: action.payload };
    }
    case ShoppingListActions.STOP_EDIT: {
      return { ...state, editId: null };
    }
    default:
      return state;
  }
}
