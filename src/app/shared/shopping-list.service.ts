import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

import { Ingredient } from "./ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  ingredients$ = new BehaviorSubject<Ingredient[]>(this.ingredients);
  constructor() {}
  getIngredients(): Observable<Ingredient[]> {
    this.ingredients$.next(this.ingredients.slice());
    return this.ingredients$.asObservable();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredients$.next(this.ingredients.slice());
  }
  deleteLastIngredient() {
    this.ingredients.pop();
    this.ingredients$.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredients$.next(this.ingredients.slice());
  }
}
