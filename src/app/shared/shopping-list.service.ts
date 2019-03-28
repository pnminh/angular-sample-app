import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

import { Ingredient } from "./ingredient.model";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  ingredients$ = new BehaviorSubject<Ingredient[]>(this.ingredients);
  editIngredientId$ = new Subject<number>();
  constructor() {}
  getIngredient(id: number): Ingredient {
    return this.ingredients.slice(id, id + 1)[0];
  }
  updateIngredient(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
    this.ingredients$.next(this.ingredients);
  }
  getIngredients(): Observable<Ingredient[]> {
    this.ingredients$.next(this.ingredients.slice());
    return this.ingredients$.asObservable();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredients$.next(this.ingredients.slice());
  }
  deleteLastIngredient(id:number) {
    this.ingredients.splice(id,1);
    this.ingredients$.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredients$.next(this.ingredients.slice());
  }
  onEditIngredientIdChange(id:number){
    this.editIngredientId$.next(id);
  }
  getEditIngredientIdChange(){
    return this.editIngredientId$.asObservable();
  }
}
