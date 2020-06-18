import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CursoService } from "src/app/services/curso.service";

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
  public isLoading: boolean = false;

  constructor(private cursoService: CursoService, private router: Router) {
    this.novoVideoForm = new FormGroup({
      link: new FormControl("", [Validators.required]),
      titulo: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {}

  handleAddImageClick() {
    (document.querySelector(".jsInputUploadImagem") as HTMLElement).click();
  }

  handleImageChange(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = () => {
      let dataURL = reader.result;
      let imageBox = document.querySelector(".jsAddImagem") as HTMLElement;
      imageBox.style.backgroundImage = `url(${dataURL})`;
      this.foto = dataURL.toString();
      let imageTitle = document.querySelector(".jsImageTitle") as HTMLElement;
      imageTitle.style.display = "none";
    };

    let fileSize = input.files[0].size / 1024 / 1024;

    let isOverLimit = fileSize > 0.05;

    if (isOverLimit) {
      alert("Imagem muito grande. Use uma menor que 50kb");
      return;
    }

    let hasImageUploaded = !!input.files[0];
    if (hasImageUploaded) reader.readAsDataURL(input.files[0]);

    reader.readAsDataURL(input.files[0]);
  }

  getYoutubeId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  async sendVideo() {
    if (!this.novoVideoForm.valid) {
      console.log("form invalid");
      return;
    } else {
      try {
        this.isLoading = true;
        let formValue = this.novoVideoForm.value;
        formValue.link = this.getYoutubeId(formValue.link);
        formValue.imagem = this.foto;
        this.cursoService
          .createCurso(formValue)
          .then((res) => {
            alert("Cadastro realizado com sucesso");
          })
          .catch(console.error);

        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
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
