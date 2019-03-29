import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";

import { RecipeService } from "./../../shared/recipe.service";
import { Recipe } from "./recipe-item/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<Recipe[]>;
  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getRecipes();
  }

  ngOnInit() {}
}
