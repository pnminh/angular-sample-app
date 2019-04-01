import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromApp from '../shared/store/app.reducers';
import { AuthState } from './store/auth.reducers';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    /* private authService: AuthService, */ private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    /* return this.authService.isAuthenticated().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) return true;
        else {
          this.router.navigate(["/signin"]);
        }
      })
    ); */
    return this.store.select("auth").pipe(take(1),
      map((authState: AuthState) => {
        if (authState.token != null) return true;
        else {
          this.router.navigate(["/signin"]);
        }
      })
    );
  }
}
