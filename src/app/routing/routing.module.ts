import { SigninComponent } from "./../auth/signin/signin.component";
import { RecipeEditComponent } from "./../recipes/recipe-edit/recipe-edit.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./../recipes/recipe-details/recipe-details.component";
import { RecipesComponent } from "./../recipes/recipes.component";
import { ShoppingListComponent } from "./../shopping-list/shopping-list.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const routes: Routes = [
  {
    path: "recipes",
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    data: { message: "Please select recipe to get details" },
    children: [
      {
        path: "",
        component: RecipeStartComponent
      },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailsComponent
      },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  {
    path: "shopping-list",
    canActivate: [AuthGuardService],
    component: ShoppingListComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "**",
    redirectTo: "/recipes"
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
