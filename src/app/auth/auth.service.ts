import { Injectable } from "@angular/core";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
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
}
export interface AuthModel {
  email: string;
  password: string;
}
