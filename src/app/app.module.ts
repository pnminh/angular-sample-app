import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthEffects } from './auth/store/auth.effects';
import { CoreModule } from './core/core.module';
import { CycleHookChildComponent } from './cycle-hooks/cycle-hook-child/cycle-hook-child.component';
import { CycleHooksComponent } from './cycle-hooks/cycle-hooks.component';
import { AdvancedBackgroundStyleDirective } from './directive-test/advanced-background-style.directive';
import { BackgroupStyleDirective } from './directive-test/background-style.directive';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import { RepeatDirective } from './directive-test/repeat.directive';
import { LocalRefComponent } from './local-ref/local-ref.component';
import { NgContentRefChildComponent } from './ng-content-ref/ng-content-ref-child/ng-content-ref-child.component';
import { NgContentRefComponent } from './ng-content-ref/ng-content-ref.component';
import { ServerComponent } from './server/server.component';
import { FirebaseHttpInterceptor } from './shared/http.interceptor';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { RecipeService } from './shared/recipe.service';
import { SharedModule } from './shared/shared.module';
import { reducers } from './shared/store/app.reducers';
import { ToggleDirective } from './shared/toggle.directive';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { TodoControlComponent } from './todo/todo-control/todo-control.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
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
    ToggleDirective
  ],
  imports: [
    BrowserModule,
    //need to move the child route module first before the route for root
    /* RecipesModule, */
    AuthModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    /* StoreRouterConnectingModule, */
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseHttpInterceptor,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
