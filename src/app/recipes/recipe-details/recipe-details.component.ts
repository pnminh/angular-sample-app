import { ShoppingListService } from './../../shared/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from "./../../shared/recipe.service";
import { Recipe } from "./../recipe-list/recipe-item/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-details",
  templateUrl: "./recipe-details.component.html",
  styleUrls: ["./recipe-details.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
  @Input('chosenRecipe') chosenRecipe:Recipe

  constructor(private recipeService: RecipeService,private shoppingListService:ShoppingListService) {}

  ngOnInit() {}
  addIngredients(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
