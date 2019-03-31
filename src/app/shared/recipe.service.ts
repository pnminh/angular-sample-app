import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DataStorageService } from './../data-storage.service';
import { Recipe } from './../recipes/recipe-list/recipe-item/recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [];
  private recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(
    this.recipes
  );
  constructor(private dataStorageService: DataStorageService) {}
  getRecipe(id: number) {
    return this.recipes.slice(id, id + 1)[0];
  }
  getRecipes(): Observable<Recipe[]> {
    if (this.recipes.length === 0) {
      this.loadRecipes();
    }
    return this.recipes$.asObservable();
  }
  addRecipe(recipe: Recipe): number {
    this.recipes.push(recipe);
    this.recipes$.next(this.recipes);
    return this.recipes.indexOf(recipe);
  }
  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipes$.next(this.recipes);
  }
  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipes$.next(this.recipes);
  }
  persistRecipes(): Observable<any> {
    return this.dataStorageService.saveRecipes(this.recipes);
  }
  loadRecipes(): void {
    this.dataStorageService
      .loadRecipes()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.recipes$.next(recipes);
      });
  }
}
