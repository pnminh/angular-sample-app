import { EventEmitter } from "@angular/core";
import { Recipe } from "./../recipes/recipe-list/recipe-item/recipe.model";
import { Ingredient } from "./ingredient.model";
export class RecipeService {
  selectedRecipe: EventEmitter<number> = new EventEmitter();
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A good recipe",
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
      [new Ingredient("Banana", 2), new Ingredient("Baking powder", 1)]
    ),
    new Recipe(
      "Banh my",
      "A delicious Vietnamese style French bread",
      "https://minimalistbaker.com/wp-content/uploads/2018/08/Cauliflower-Banh-Mi-SQUARE.jpg",
      [
        new Ingredient("French bread", 1),
        new Ingredient("Cucumber", 1),
        new Ingredient("Grilled Pork", 5)
      ]
    )
  ];
  constructor() {}
  getRecipe(id: number) {
    return this.recipes.slice(id, id+1)[0];
  }
  getRecipes() {
    return this.recipes.slice();
  }
}
