import { Subscription, Observable } from "rxjs";
import { ShoppingListService } from "./../shared/shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients$ = this.shoppingListService.getIngredients();
  }
}
