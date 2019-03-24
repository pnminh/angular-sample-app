import { RecipeService } from "./../shared/recipe.service";
import { Recipe } from "./recipe-list/recipe-item/recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  chosenRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(recipeId => {
      this.chosenRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
}
