import { Ingredient } from "./../../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<Ingredient>();
  @Output() delete = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  addItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredient.emit({ name: nameInput.value, amount: +amountInput.value });
  }
  deleteItem(){
    this.delete.emit("delete");
  }
}
