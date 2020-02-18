import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "index", redirectTo: "" },
  { path: "users", component: UsersComponent },
  { path: "Users", redirectTo: "users" },
  { path: "register", component: RegisterComponent },
  { path: "Register", redirectTo: "register" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
