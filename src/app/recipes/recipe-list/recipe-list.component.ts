import { Recipe } from "./recipe-item/recipe.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  @Output() chosenRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "A good recipe",
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg"
    )
  ];
  constructor() {
  }

  ngOnInit() {
    /* this.chosenRecipe.emit(this.recipes[0]) */
  }
  chooseRecipe(chosenRecipe: Recipe) {
    this.chosenRecipe.emit(chosenRecipe);
  }
}
