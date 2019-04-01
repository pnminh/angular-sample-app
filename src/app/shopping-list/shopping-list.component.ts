import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Ingredient } from "./../shared/ingredient.model";
import * as ShoppingListActions from "./store/shopping-list.actions";
import * as fromShoppingList from "./store/shopping-list.reducers";
import * as fromApp from "../shared/store/app.reducers";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;
  selectedIngredientId: number;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.ingredients$ = this.store
      .select("shoppingList")
      .pipe(
        map(
          (shoppingListState: fromShoppingList.ShoppingListState) =>
            shoppingListState.ingredients
        )
      );
  }
  editIngredient(id: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(id));
  }
}
