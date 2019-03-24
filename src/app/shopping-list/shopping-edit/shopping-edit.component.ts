import { ShoppingListService } from './../../shared/shopping-list.service';
import { Ingredient } from "./../../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService:ShoppingListService) {}

  ngOnInit() {}
  addItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListService.addIngredient({ name: nameInput.value, amount: +amountInput.value });
  }
  deleteItem(){
    this.shoppingListService.deleteLastIngredient();
  }
}
