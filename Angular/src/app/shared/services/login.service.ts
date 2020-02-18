import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Constant } from "../classes/Constant";
import { Login } from "../models/Login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http: HttpClient
  ) { }

  public login(body: Login): Observable<any> {
    return this._http.post(Constant.API + "/login", body, Constant.headers);
  } 
}
