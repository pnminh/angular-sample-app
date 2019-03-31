import { NgModule } from "@angular/core";

import { HomeComponent } from "../home/home.component";
import { RoutingModule } from "../routing/routing.module";
import { HeaderComponent } from "./../header/header.component";
import { SharedModule } from "./../shared/shared.module";

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [SharedModule, RoutingModule],
  exports: [HomeComponent, HeaderComponent, RoutingModule]
})
export class CoreModule {}
