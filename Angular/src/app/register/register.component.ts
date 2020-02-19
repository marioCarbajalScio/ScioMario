import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenService } from "../shared/services/token.service";
import { RegisterService } from "../shared/services/register.service";
import { Login } from '../shared/models/Login';
import { User } from '../shared/models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorRegister : boolean = true;
  successRegister : boolean = true;
  newUser: User = new User();

  constructor(
    private _formBuilder: FormBuilder,
    private _registerService: RegisterService,
    private _router: Router
  ){ }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      first_name: ["", [Validators.required, Validators.minLength(2)]],
      last_name: ["", [Validators.required, Validators.minLength(2)]],
      job: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.minLength(2)]],
      password: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(){
    if (this.registerForm.valid) {
      const registerObject: User = {
        //id: null,
        first_name: this.registerForm.get("first_name").value,
        //last_name: this.registerForm.get("last_name").value,
        job: this.registerForm.get("job").value,
        //email: this.registerForm.get("email").value,
        //password: this.registerForm.get("password").value
      };
      this._registerService.registerUser(registerObject).subscribe(response => {
        if(response){
          console.log(response);
          console.log("User registerd.");
          this.newUser = registerObject;
          this.newUser.id = response.id;
          //this._router.navigateByUrl("users");
          this.errorRegister = true;
          this.successRegister = false;
        }
      });
    } else {
      this.errorRegister = false;
    }
  }

  onRegister(){
    this._router.navigateByUrl("users");
  }

}
