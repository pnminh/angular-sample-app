import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "../recipes/recipes.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "../recipes/recipe-details/recipe-details.component";
const route: Routes = [
  {
    path: "",
    component: RecipesComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        component: RecipeStartComponent,
        pathMatch:"full"
      },
      { path: "new", component: RecipeEditComponent },
      {
        path: ":id",
        component: RecipeDetailsComponent
      },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
