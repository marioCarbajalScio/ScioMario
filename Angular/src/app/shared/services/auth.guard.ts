import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  private _router : Router,
  private _token : TokenService
  ){

}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._token.getActiveToken() == 'QpwL5tke4Pnpja7X4'){
        return true;
      }else{
        this._router.navigateByUrl("");
        return false;
      }
    
  }
  
}
