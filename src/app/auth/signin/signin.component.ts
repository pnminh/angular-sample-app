import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) {
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
    this.authService
      .signIn(this.signinForm.value)
      .then(response => {
        console.log(response);
        this.router.navigate(["/"]);
      })
      .catch(err => console.log(err));
  }
}
