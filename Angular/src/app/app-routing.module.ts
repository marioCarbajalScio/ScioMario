import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "index", redirectTo: "" },
  { path: "users",canActivate: [AuthGuard], component: UsersComponent },
  { path: "Users",redirectTo: "users" },
  { path: "register", canActivate: [AuthGuard], component: RegisterComponent },
  { path: "Register", redirectTo: "register" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
