import { Router } from "@angular/router";
import { User } from "./../../../../safari-course-route-app/src/app/model/user.model";
import { pipe } from "@angular/core/src/render3";
import { map, switchMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Observable, from, Subject, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  authStateChangedSubject = new Subject<firebase.User>();
  constructor(private router: Router) {
    firebase.auth().onAuthStateChanged(this.authStateChangedSubject);
  }
  signUp(authData: AuthModel): Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(authData.email, authData.password);
  }
  signIn(authData: AuthModel): Promise<firebase.auth.UserCredential> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(authData.email, authData.password);
  }
  isAuthenticated(): Observable<boolean> {
    return this.authStateChangedSubject.pipe(
      map((user: firebase.User) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(err => {
        return of(false);
      })
    );
  }
  getToken(): Observable<string> {
    return this.authStateChangedSubject.pipe(
      switchMap((user: firebase.User) => {
        if (user) {
          return from(user.getIdToken());
        } else {
          //this.router.navigate(["/signin"]);
          return of(null);
        }
      })
    );
  }
  logout(): Promise<void> {
    return firebase
      .auth()
      .signOut()
      .then(() => {});
  }
}
export interface AuthModel {
  email: string;
  password: string;
}
