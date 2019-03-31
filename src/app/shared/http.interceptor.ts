import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpParams
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { map, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
@Injectable()
export class FirebaseHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("interceptor called");
    return this.authService.getToken().pipe(
      map((token: string) =>
        req.clone({ params: new HttpParams().set("auth", token) })
      ),
      switchMap((req: HttpRequest<any>) => next.handle(req))
    );
  }
}
