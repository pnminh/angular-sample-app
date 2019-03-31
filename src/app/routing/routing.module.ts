import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from './../auth/signin/signin.component';
import { ShoppingListComponent } from './../shopping-list/shopping-list.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path: "recipes",
    loadChildren: '../recipes/recipes.module#RecipesModule',

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
    redirectTo: "/"
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
