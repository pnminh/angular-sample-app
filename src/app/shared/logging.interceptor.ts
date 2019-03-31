import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        tap((event: HttpEvent<any>) => console.log("intercepted event:", event))
      );
  }
}
