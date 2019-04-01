import { Action } from '@ngrx/store';

import { AuthModel } from '../auth.model';

export const START_SIGNUP = "START_SIGNUP";
export const FINISH_SIGNUP = "FINISH_SIGNUP";
export const START_SIGNIN = "START_SIGNIN";
export const FINISH_SIGNIN = "FINISH_SIGNUP";
export const START_LOGOUT = "START_LOGOUT";
export const FINISH_LOGOUT = "FINISH_LOGOUT";
export class StartSignin implements Action {
  readonly type = START_SIGNIN;
  constructor(public payload: AuthModel) {}
}
export class FinishSignin implements Action {
  readonly type = FINISH_SIGNIN;
  constructor(public payload: string) {}
}
export class StartSignup implements Action {
  readonly type = START_SIGNUP;
  constructor(public payload: AuthModel) {}
}
export class FinishSignup implements Action {
  readonly type = FINISH_SIGNUP;
  constructor(public payload: string) {}
}
export class StartLogout implements Action {
  readonly type = START_LOGOUT;
  constructor(public payload: any = null) { }
}
export class FinishLogout implements Action {
  readonly type = FINISH_LOGOUT;
  constructor(public payload: any = null) { }
}
export type AuthActions =
  | StartSignin
  | FinishSignin
  | StartSignup
  | FinishSignup
  | StartLogout
  | FinishLogout;
