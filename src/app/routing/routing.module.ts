import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { AuthGuardService } from "../auth/auth-guard.service";
import { HomeComponent } from "../home/home.component";
import { ShoppingListComponent } from "./../shopping-list/shopping-list.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "recipes",
    loadChildren: "../recipes/recipes.module#RecipesModule"
  },
  {
    path: "shopping-list",
    canActivate: [AuthGuardService],
    component: ShoppingListComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class RoutingModule {}
