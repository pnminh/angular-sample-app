import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";

import * as fromApp from "../shared/store/app.reducers";
import { AuthState } from "./../auth/store/auth.reducers";

@Injectable()
export class FirebaseHttpInterceptor implements HttpInterceptor {
  constructor(
    /* private authService: AuthService */ private store: Store<
      fromApp.AppState
    >
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("interceptor called");
    /* return this.authService.getToken().pipe(
      map((token: string) =>
        req.clone({ params: new HttpParams().set("auth", token) })
      ),
      switchMap((req: HttpRequest<any>) => next.handle(req))
    ); */
    //interceptor should take a single value from store, as subscribing to the store
    // will get all changes and cause issue with the interceptor
    return this.store.select("auth").pipe(
      take(1),
      map((authState: AuthState) =>
        req.clone({ params: new HttpParams().set("auth", authState.token) })
      ),
      switchMap((req: HttpRequest<any>) => next.handle(req))
    );
  }
}
