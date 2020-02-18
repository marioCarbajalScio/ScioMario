import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Constant } from "../classes/Constant";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  public listUsers(page: number): Observable<any> {
    return this._http.get(Constant.API + "/users?page="+page);
  }

  public listUser(id: number): Observable<any> {
    return this._http.get(Constant.API + "/users/"+id);
  }
}
