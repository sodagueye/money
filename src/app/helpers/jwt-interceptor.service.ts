import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import{HttpInterceptor ,HttpRequest , HttpHandler ,HttpEvent} from '@angular/common/http';
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements  HttpInterceptor {
  constructor(
    private authentificationService:AuthenticationService
  ) {}
   

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    let currentUser = this.authentificationService.currentUserValue;
    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
      }


      });
 

    }
    return next.handle(req);

  }

 
}
