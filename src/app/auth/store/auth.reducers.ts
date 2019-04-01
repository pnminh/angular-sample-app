import * as AuthActions from "./auth.actions";

export interface AuthState {
  token: string;
}
const initialState: AuthState = {
  token: null
};
export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.FINISH_SIGNIN:
    case AuthActions.FINISH_SIGNUP:
      return { ...state, token: action.payload };
    case AuthActions.FINISH_LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}
