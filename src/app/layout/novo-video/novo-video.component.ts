import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-novo-video",
  templateUrl: "./novo-video.component.html",
  styleUrls: ["./novo-video.component.scss"],
})
export class NovoVideoComponent implements OnInit {
  public novoVideoForm: FormGroup;
  public data: any = {};
  public formFeedback: string = "";
  public foto: string = "";

  constructor(private authService: AuthService, private router: Router) {
    this.novoVideoForm = new FormGroup({
      link: new FormControl("", [Validators.required]),
      titulo: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit() {}

  handleAddImageClick() {
    // console.log("clicked");
    // console.log(this.foto);
    document.querySelector(".jsInputUploadImagem").click();
  }

  handleImageChange(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
      let dataURL = reader.result;
      // this.foto = dataURL;
      console.log(dataURL);
      let imageBox = document.querySelector(".jsAddImagem") as HTMLElement;
      imageBox.style.backgroundImage = `url(${dataURL})`;

      let imageTitle = document.querySelector(".jsImageTitle") as HTMLElement;
      imageTitle.style.display = "none";
    };
    reader.readAsDataURL(input.files[0]);
    // capaMissao.ativa();
  }

  async sendVideo() {
    let formValue = this.novoVideoForm.value;

    console.log(formValue);

    if (!this.novoVideoForm.valid) {
      console.log("form invalid");
      return;
    } else {
      console.log("form invalido");
    }

    console.log(this.novoVideoForm.value);
  }

  resetFeedback() {
    this.formFeedback = "";
  }

  getFieldError(formControlName) {
    let control = this.novoVideoForm.get(formControlName);

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
