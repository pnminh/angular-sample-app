import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { Recipe } from "./../recipes/recipe-list/recipe-item/recipe.model";
import { Ingredient } from "./ingredient.model";

export class RecipeService {
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
  private recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(
    this.recipes
  );
  constructor() {}
  getRecipe(id: number) {
    return this.recipes.slice(id, id + 1)[0];
  }
  getRecipes(): Observable<Recipe[]> {
    return this.recipes$.asObservable();
  }
  addRecipe(recipe: Recipe):number {
    this.recipes.push(recipe);
    this.recipes$.next(this.recipes);
    return this.recipes.indexOf(recipe);
  }
  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipes$.next(this.recipes);
  }
}
