import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { from, Observable, of, ReplaySubject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class AuthService {
  authStateChangedSubject: ReplaySubject<firebase.User> = new ReplaySubject<
    firebase.User
  >(1);
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
