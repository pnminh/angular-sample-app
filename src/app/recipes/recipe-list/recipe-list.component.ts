import { RecipeService } from "./../../shared/recipe.service";
import { Recipe } from "./recipe-item/recipe.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnInit() {
    /* this.chosenRecipe.emit(this.recipes[0]) */
  }
  chooseRecipe(id: number) {
    this.recipeService.selectedRecipe.emit(id);
  }
}
