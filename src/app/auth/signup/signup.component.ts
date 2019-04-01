import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import * as firebase from "firebase";
import * as fromApp from "../../shared/store/app.reducers";
import { Store } from "@ngrx/store";
import { AuthModel } from "../auth.model";
import * as AuthActions from "../store/auth.actions";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    /* private authService: AuthService ,*/ private router: Router,
    private store: Store<fromApp.AppState>
  ) {
    this.signupForm = new FormGroup({
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
      .signUp(this.signupForm.value)
      .then(response => this.router.navigate(["/"]))
      .catch(err => console.log(err)); */
    /* firebase
      .auth()
      .createUserWithEmailAndPassword(
        (this.signupForm.value as AuthModel).email,
        (this.signupForm.value as AuthModel).password
      )
      .then((userCredential: firebase.auth.UserCredential) =>
        userCredential.user.getIdToken()
      )
      .then((token: string) => {
        this.store.dispatch(new AuthActions.FinishSignup(token));
        this.router.navigate(["/"]);
      })
      .catch(err => console.log(err)); */
    this.store.dispatch(new AuthActions.StartSignup(this.signupForm.value));
  }
}
