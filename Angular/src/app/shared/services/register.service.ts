import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Constant } from "../classes/Constant";
import { Login } from '../models/Login';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private _http : HttpClient
  ) { }

  public registerUser(body: User): Observable<any> {
    return this._http.post(Constant.API + "/users", body, Constant.headers);
  }
}
