import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as firebase from "firebase";
import { from, Observable } from "rxjs";
import { map, switchMap, take, mergeMap, merge } from "rxjs/operators";

import { Recipe } from "./recipes/recipe-list/recipe-item/recipe.model";

@Injectable({
  providedIn: "root"
})
export class DataStorageService {
  private firebaseDbUrl = "https://ng-recipe-b4231.firebaseio.com";
  recipesCollectionName = "recipes";
  constructor(private http: Http) {}
  saveRecipes(recipes: Recipe[]): Observable<Response> {
    return from(firebase.auth().currentUser.getIdToken()).pipe(
      switchMap(token =>
        this.http.put(
          `${this.firebaseDbUrl}/${
            this.recipesCollectionName
          }.json?auth=${token}`,
          recipes
        )
      )
    );
  }
  loadRecipes(): Observable<Recipe[]> {
    return Observable.create(obs => {
      return firebase
        .auth()
        .onAuthStateChanged(
          user => obs.next(user),
          err => obs.error(err),
          () => obs.complete()
        );
    }).pipe(
      switchMap((user: firebase.User) => from(user.getIdToken())),
      switchMap(token =>
        this.http
          .get(
            `${this.firebaseDbUrl}/${
              this.recipesCollectionName
            }.json?auth=${token}`
          )
          .pipe(map(response => response.json()))
      )
    );
  }
}
