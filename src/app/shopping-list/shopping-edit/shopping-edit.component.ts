import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subscription } from "rxjs";

import { Ingredient } from "./../../shared/ingredient.model";
import * as ShoppingListActions from "./../store/shopping-list.actions";
import * as fromShoppingList from "./../store/shopping-list.reducers";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  shoppingListForm: FormGroup;
  isFormValid: boolean = false;
  isEditing = false;
  subscription: Subscription;
  _editIngredientId: number;
  constructor(private store: Store<fromShoppingList.AppState>) {
    this.shoppingListForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[1-9]+[0-9]*$")
      ])
    });
  }

  ngOnInit() {
    this.shoppingListForm.statusChanges.subscribe(
      status => (this.isFormValid = status === "VALID")
    );
    this.subscription = this.store
      .select("shoppingList")
      .subscribe((shoppingListState: fromShoppingList.ShoppingListState) => {
        this._editIngredientId = shoppingListState.editId;
        this.isEditing = false;
        if (shoppingListState.editId != null) {
          const ingredient =
            shoppingListState.ingredients[shoppingListState.editId];
          this.isEditing = true;
          this.shoppingListForm.setValue({
            name: ingredient.name,
            amount: ingredient.amount
          });
        }
      });
  }
  addItem() {
    const ingredient: Ingredient = {
      name: this.shoppingListForm.get("name").value,
      amount: +this.shoppingListForm.get("amount").value
    };
    if (this.isEditing) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(ingredient));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
    }
    this.clearInputs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  deleteItem() {
    if (this.isEditing && this._editIngredientId != null) {
      this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    }
    this.clearInputs();
  }
  clearInputs() {
    if (this._editIngredientId != null) {
      this.store.dispatch(new ShoppingListActions.StopEdit());
    }

    this.shoppingListForm.reset();
  }
}
