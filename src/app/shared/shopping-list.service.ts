import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  itemChangeEvent = new EventEmitter<Event>();
  ingredients:Ingredient[] = []
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.itemChangeEvent.emit(new Event('itemAdded'));
  }
  deleteLastIngredient(){
    this.ingredients.pop();
    this.itemChangeEvent.emit(new Event('itemDeleted'));
  }
  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.itemChangeEvent.emit(new Event('batchItemsAdded'));
  }
}
