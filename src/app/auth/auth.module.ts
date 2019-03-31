import { NgModule } from "@angular/core";

import { SharedModule } from "./../shared/shared.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { Routes, RouterModule } from "@angular/router";
const route: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "signin",
    component: SigninComponent
  }
];
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [SharedModule, RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthModule {}
