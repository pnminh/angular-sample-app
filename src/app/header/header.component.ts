import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { RecipeService } from "./../shared/recipe.service";
import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnDestroy {
  constructor(
    private recipeService: RecipeService,
    private authService: AuthService,
    private router: Router
  ) {}
  loadRecipeSubscription: Subscription;
  saveRecipeSubscription: Subscription;
  isAuthenticated$ = this.authService.isAuthenticated();
  saveData() {
    this.saveRecipeSubscription = this.recipeService
      .persistRecipes()
      .subscribe(response => console.log(response));
  }
  fetchData() {
    this.recipeService
      .loadRecipes();
  }
  ngOnDestroy() {
    this.saveRecipeSubscription.unsubscribe();
  }
  toggleNav(collapsableEle: HTMLElement) {
    if (collapsableEle.classList.contains("show")) {
      collapsableEle.classList.remove("show");
    } else {
      collapsableEle.classList.add("show");
    }
  }
  signout() {
    this.authService.logout().then(() => {
      this.router.navigate(["/signin"]);
    });
  }
}
