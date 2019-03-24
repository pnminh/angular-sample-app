import { Recipe } from "./recipe-list/recipe-item/recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  chosenRecipe: Recipe;
  constructor() {}

  ngOnInit() {}
  chooseRecipe(chosenRecipe: Recipe) {
    this.chosenRecipe = chosenRecipe;
  }
}
