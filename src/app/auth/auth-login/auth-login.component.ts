import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.scss"],
})
export class AuthLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public data: any = {};
  public formFeedback: string = "";

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  async sendLogin() {
    let formValue = this.loginForm.value;

    console.log(formValue);

    if (!this.loginForm.valid) {
      console.log("form invalid");
      return;
    } else {
      try {
        let formValue = this.loginForm.value;
        let res = await this.authService.login(formValue);

        this.authService.setLoggedUser(res.token, res.user);
        console.log("res.data", res);

        if (res.erro) {
          this.formFeedback = res.erro.message;
        }

        this.router.navigate(["/"]);
      } catch (error) {
        console.error(error);
        this.formFeedback = "Credenciais negadas";
      }
    }

    console.log(this.loginForm.value);
  }

  resetFeedback() {
    this.formFeedback = "";
  }

  getFieldError(formControlName) {
    let control = this.loginForm.get(formControlName);

    if (!control) return false;

    if (control.untouched) return false;

    if (control.valid) return false;

    if (control.hasError("required")) {
      return "Este campo é obrigatório.";
    }

    if (control.hasError("minlength")) {
      let minlength = control.getError("minlength");
      return (
        "O mínimo de caracteres para este campo é " +
        minlength.requiredLength +
        "."
      );
    }

    return "Campo inválido.";
  }
}
