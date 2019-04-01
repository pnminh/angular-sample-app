import { AuthModel } from "./../auth.model";
import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import * as fromApp from "../../shared/store/app.reducers";
import * as firebase from "firebase";
import * as AuthActions from "./../store/auth.actions";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(
    /* private authService: AuthService ,*/ private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnInit() {}
  onSubmit() {
    /* this.authService
      .signIn(this.signinForm.value)
      .then(response => {
        console.log(response);
        this.router.navigate(["/"]);
      })
      .catch(err => console.log(err)); */
    /* firebase
      .auth()
      .signInWithEmailAndPassword(
        (this.signinForm.value as AuthModel).email,
        (this.signinForm.value as AuthModel).password
      )
      .then((userCredential: firebase.auth.UserCredential) =>
        userCredential.user.getIdToken()
      )
      .then((token: string) => {
        this.store.dispatch(new AuthActions.FinishSignin(token));
        this.router.navigate(["/"]);
      })
      .catch(err => console.log(err)); */
    this.store.dispatch(new AuthActions.StartSignin(this.signinForm.value));
  }
}
