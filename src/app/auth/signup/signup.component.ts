import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
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
    this.authService
      .signUp(this.signupForm.value)
      .then(response => this.router.navigate(["/"]))
      .catch(err => console.log(err));
  }
}
