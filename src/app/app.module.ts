import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CycleHookChildComponent } from './cycle-hooks/cycle-hook-child/cycle-hook-child.component';
import { CycleHooksComponent } from './cycle-hooks/cycle-hooks.component';
import { AdvancedBackgroundStyleDirective } from './directive-test/advanced-background-style.directive';
import { BackgroupStyleDirective } from './directive-test/background-style.directive';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { RepeatDirective } from './directive-test/repeat.directive';
import { HeaderComponent } from './header/header.component';
import { LocalRefComponent } from './local-ref/local-ref.component';
import { NgContentRefChildComponent } from './ng-content-ref/ng-content-ref-child/ng-content-ref-child.component';
import { NgContentRefComponent } from './ng-content-ref/ng-content-ref.component';
import { RecipesModule } from './recipes/recipes.module';
import { RoutingModule } from './routing/routing.module';
import { ServerComponent } from './server/server.component';
import { RecipeService } from './shared/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ToggleDirective } from './shared/toggle.directive';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TodoControlComponent } from './todo/todo-control/todo-control.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
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
    SignupComponent,
    SigninComponent,
    ToggleDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //need to move the child route module first before the route for root
    /* RecipesModule, */
    RoutingModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
