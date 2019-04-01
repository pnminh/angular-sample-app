import { RecipesEffect } from './store/recipes.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { RecipesRoutingModule } from "./../routing/recipes-routing.module";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { recipesReducer } from "./store/recipes.reducers";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    SharedModule,
    RecipesRoutingModule,
    StoreModule.forFeature("recipes", recipesReducer),
    EffectsModule.forFeature([RecipesEffect])
  ],
  exports: [RecipesRoutingModule]
})
export class RecipesModule {}
