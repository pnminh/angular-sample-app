import { BackgroupStyleDirective } from './directive-test/background-style.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoControlComponent } from './todo/todo-control/todo-control.component';
import { LocalRefComponent } from './local-ref/local-ref.component';
import { NgContentRefComponent } from './ng-content-ref/ng-content-ref.component';
import { NgContentRefChildComponent } from './ng-content-ref/ng-content-ref-child/ng-content-ref-child.component';
import { CycleHooksComponent } from './cycle-hooks/cycle-hooks.component';
import { CycleHookChildComponent } from './cycle-hooks/cycle-hook-child/cycle-hook-child.component';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { AdvancedBackgroundStyleDirective } from './directive-test/advanced-background-style.directive';
import { RepeatDirective } from './directive-test/repeat.directive';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    TodoComponent,
    TodoItemComponent,
    TodoControlComponent,
    LocalRefComponent,
    NgContentRefComponent,
    NgContentRefChildComponent,
    CycleHooksComponent,
    CycleHookChildComponent,
    DirectiveTestComponent,
    BackgroupStyleDirective,
    AdvancedBackgroundStyleDirective,
    RepeatDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
