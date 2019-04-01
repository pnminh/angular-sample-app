import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";

import * as fromRecipes from "../recipes/store/recipes.reducers";
import * as fromApp from "../shared/store/app.reducers";
import * as AuthActions from "./../auth/store/auth.actions";
import { AuthState } from "./../auth/store/auth.reducers";
import * as RecipesAction from "./../recipes/store/recipes.actions";
import { Recipe } from "../recipes/recipe-list/recipe-item/recipe.model";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnDestroy {
  constructor(
    /* private recipeService: RecipeService, */
    /* private authService: AuthService, */
    private router: Router,
    private store: Store<fromApp.AppState>,
    private recipeStore: Store<fromRecipes.FeatureState>
  ) {}
  loadRecipeSubscription: Subscription;
  saveRecipeSubscription: Subscription;
  /* isAuthenticated$ = this.authService.isAuthenticated(); */
  isAuthenticated$ = this.store
    .select("auth")
    .pipe(map((authState: AuthState) => authState.token !== null));
  saveData() {
    /* this.saveRecipeSubscription = this.recipeService
      .persistRecipes()
      .subscribe(response => console.log(response)); */
    this.recipeStore.dispatch(new RecipesAction.StartRecipesPersisting());
  }
  fetchData() {
    /* this.recipeService.loadRecipes(); */
    this.recipeStore.dispatch(new RecipesAction.StartRecipesFetching());
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
    /* this.authService.logout().then(() => {
      this.router.navigate(["/signin"]);
    }); */
    /* firebase
      .auth()
      .signOut()
      .then(() => {
        this.store.dispatch(new AuthActions.StartLogout());
        this.router.navigate(["/signin"]);
      }); */
    this.store.dispatch(new AuthActions.StartLogout());
  }
}
