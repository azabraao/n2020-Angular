import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-auth-login",
  templateUrl: "./auth-login.component.html",
  styleUrls: ["./auth-login.component.scss"],
})
export class AuthLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public data: any = {};
  public formFeedback: string = "";

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
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
      alert("Preencha os campos corretamente.");

      return;
    } else {
      alert("sem erros");
    }

    console.log(this.loginForm.value);
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
