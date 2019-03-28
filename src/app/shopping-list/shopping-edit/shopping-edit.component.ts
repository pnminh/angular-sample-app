import { Subscription } from "rxjs";
import { Ingredient } from "./../../shared/ingredient.model";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ShoppingListService } from "./../../shared/shopping-list.service";

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
  constructor(private shoppingListService: ShoppingListService) {
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
    this.subscription = this.shoppingListService
      .getEditIngredientIdChange()
      .subscribe(id => {
        this._editIngredientId = id;
        if (id != null) {
          const ingredient = this.shoppingListService.getIngredient(id);
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
      this.shoppingListService.updateIngredient(
        this._editIngredientId,
        ingredient
      );
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.clearInputs();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  deleteItem() {
    if(this.isEditing && this._editIngredientId != null){
      this.shoppingListService.deleteLastIngredient(this._editIngredientId);
    }
    this.clearInputs();

  }
  clearInputs() {
    this.isEditing = false;
    this._editIngredientId = null;
    this.shoppingListForm.reset();
  }
}
