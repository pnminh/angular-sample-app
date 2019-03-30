import { Subscription } from "rxjs";
import { RecipeService } from "./../shared/recipe.service";
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnDestroy {
  constructor(private recipeService: RecipeService) {}
  loadRecipeSubscription: Subscription;
  saveRecipeSubscription: Subscription;
  saveData() {
    this.saveRecipeSubscription = this.recipeService
      .persistRecipes()
      .subscribe(response => console.log(response));
  }
  fetchData() {
    this.loadRecipeSubscription = this.recipeService
      .loadRecipes()
      .subscribe(recipes => console.log(recipes));
  }
  ngOnDestroy() {
    this.saveRecipeSubscription.unsubscribe();
    this.loadRecipeSubscription.unsubscribe();
  }
  toggleNav(collapsableEle: HTMLElement) {
    if (collapsableEle.classList.contains("show")) {
      collapsableEle.classList.remove("show");
    } else {
      collapsableEle.classList.add("show");
    }
  }
}
