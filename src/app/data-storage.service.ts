import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as firebase from "firebase";
import { from, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { AuthService } from "./auth/auth.service";
import { Recipe } from "./recipes/recipe-list/recipe-item/recipe.model";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  private firebaseDbUrl = "https://ng-recipe-b4231.firebaseio.com";
  recipesCollectionName = "recipes";
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}
  saveRecipes(recipes: Recipe[]): Observable<any> {
    /* return from(firebase.auth().currentUser.getIdToken()).pipe(
      switchMap(token =>
        this.httpClient.put<any>(
          `${this.firebaseDbUrl}/${
            this.recipesCollectionName
          }.json?auth=${token}`,
          recipes
        )
      )
    ); */
    return this.httpClient.put<any>(
      `${this.firebaseDbUrl}/${
        this.recipesCollectionName
      }.json`,
      recipes
    )
  }
  loadRecipes(): Observable<Recipe[]> {
    /* return this.authService.getToken().pipe(
      switchMap(token => {
        if (token) {
          return this.httpClient.get<Recipe[]>(
            `${this.firebaseDbUrl}/${
              this.recipesCollectionName
            }.json?auth=${token}`
          );
        } else {
          return of([]);
        }
      })
    ); */
    return this.httpClient.get<Recipe[]>(
      `${this.firebaseDbUrl}/${this.recipesCollectionName}.json`
    );
  }
}
