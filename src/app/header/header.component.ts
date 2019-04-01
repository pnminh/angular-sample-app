import { AuthState } from "./../auth/store/auth.reducers";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { RecipeService } from "./../shared/recipe.service";
import { Component, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import * as fromApp from "../shared/store/app.reducers";
import { map } from "rxjs/operators";
import * as firebase from "firebase";
import * as AuthActions from "./../auth/store/auth.actions";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnDestroy {
  constructor(
    private recipeService: RecipeService,
    /* private authService: AuthService, */
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  loadRecipeSubscription: Subscription;
  saveRecipeSubscription: Subscription;
  /* isAuthenticated$ = this.authService.isAuthenticated(); */
  isAuthenticated$ = this.store
    .select("auth")
    .pipe(map((authState: AuthState) => authState.token !== null));
  saveData() {
    this.saveRecipeSubscription = this.recipeService
      .persistRecipes()
      .subscribe(response => console.log(response));
  }
  fetchData() {
    this.recipeService.loadRecipes();
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
