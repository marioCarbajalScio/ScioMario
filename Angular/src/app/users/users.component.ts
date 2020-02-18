import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersList } from '../shared/models/UsersList';
import { User } from "../shared/models/User";
import { TokenService } from "../shared/services/token.service";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: UsersList;
  selectedUser = User;
  details : boolean = true;
  page: number = 1;
  constructor(
    private _userService: UserService,
    private _token: TokenService,
    private _router: Router
  ) {}
    
  ngOnInit() {
    this._userService.listUsers(this.page).subscribe(response => {
      this.users = response.data;
    });
  }

  selectUser(user: User){
    this._userService.listUser(user.id).subscribe(response => {
      this.selectedUser = response.data
    });
    this.details=false;
    console.log(user);
  }

  logOut(){
    this._router.navigateByUrl("");
  }

  btnInc(){
    if(this.page < 2){
      this.page = this.page+1;
      this._userService.listUsers(this.page).subscribe(response => {
      this.users = response.data;
    });
    }
  }

  btnDec(){
    if(this.page > 0){
      this.page = this.page-1;
      this._userService.listUsers(this.page).subscribe(response => {
      this.users = response.data;
    });
    }
  }

}
