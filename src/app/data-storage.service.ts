import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Recipe } from "./recipes/recipe-list/recipe-item/recipe.model";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  private firebaseDbUrl = "https://ng-recipe-b4231.firebaseio.com";
  recipesCollectionName = "recipes";
  constructor(private http: Http) {}
  saveRecipes(recipes: Recipe[]): Observable<Response> {
    return this.http.put(
      `${this.firebaseDbUrl}/${this.recipesCollectionName}.json`,
      recipes
    );
  }
  loadRecipes(): Observable<Recipe[]> {
    return this.http
      .get(`${this.firebaseDbUrl}/${this.recipesCollectionName}.json`)
      .pipe(map(response => response.json()));
  }
}
