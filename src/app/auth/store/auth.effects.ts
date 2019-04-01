import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import { map, switchMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  signUpSignIn = this.actions$.pipe(
    ofType(AuthActions.START_SIGNUP, AuthActions.START_SIGNIN),
    switchMap((action: AuthActions.StartSignup | AuthActions.StartSignin) => {
      if (action instanceof AuthActions.StartSignup) {
        return firebase
          .auth()
          .createUserAndRetrieveDataWithEmailAndPassword(
            action.payload.email,
            action.payload.password
          );
      } else {
        return firebase
          .auth()
          .signInWithEmailAndPassword(
            action.payload.email,
            action.payload.password
          );
      }
    }),
    switchMap((userCredential: firebase.auth.UserCredential) =>
      userCredential.user.getIdToken()
    ),
    map(token => {
      this.router.navigate(["/"]);
      return new AuthActions.FinishSignin(token);
    })
  );
  @Effect()
  signout = this.actions$.pipe(
    ofType(AuthActions.START_LOGOUT),
    switchMap((action: AuthActions.StartLogout) => firebase.auth().signOut()),
    map(() => {
      this.router.navigate(["/signin"]);
      return new AuthActions.FinishLogout();
    })
  );
  constructor(private actions$: Actions, private router: Router) {}
}
