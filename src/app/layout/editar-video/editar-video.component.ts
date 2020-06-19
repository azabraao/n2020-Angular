import { Component, OnInit } from "@angular/core";
import { CursoService } from "src/app/services/curso.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-editar-video",
  templateUrl: "./editar-video.component.html",
  styleUrls: ["./editar-video.component.scss"],
})
export class EditarVideoComponent implements OnInit {
  public editarVideoForm: FormGroup;
  public data: any = {};
  public formFeedback: string = "";
  public foto: string = "";
  public titulo: string = "";
  public link: string = "";
  public isLoading: boolean = false;
  public idCurso: any;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editarVideoForm = new FormGroup({
      link: new FormControl("", [Validators.required]),
      titulo: new FormControl("", [Validators.required]),
    });
  }

  async ngOnInit() {
    this.idCurso = this.route.snapshot.params.id;

    let curso: any = {
      imagem: "",
      titulo: "",
      link: "",
    };

    curso = await this.cursoService.getCurso(this.idCurso);

    this.foto = curso.imagem;
    this.titulo = curso.titulo;
    this.link = `https://www.youtube.com/watch?v=${curso.link}`;
  }

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

  handleLinkChange(event) {
    let link = event.target.value;
    this.link = link;

    this.resetFeedback();
  }

  handleTituloChange(event) {
    let titulo = event.target.value;
    this.titulo = titulo;

    this.resetFeedback();
  }

  getYoutubeId(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  async updateVideo() {
    if (
      !this.editarVideoForm.valid &&
      !this.foto &&
      !this.titulo &&
      !this.link
    ) {
      alert("Preencha todos os campos corretamente.");
      return;
    } else {
      try {
        this.isLoading = true;

        let formValue = {
          titulo: this.titulo,
          link: this.getYoutubeId(this.link),
          imagem: this.foto,
        };

        this.cursoService
          .updateCurso(formValue, this.idCurso)
          .then((res) => {
            alert("Curso atualizado com sucesso");
          })
          .catch(console.error);

        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
      this.isLoading = false;
    }
  }

  resetFeedback() {
    this.formFeedback = "";
  }

  getFieldError(formControlName) {
    let control = this.editarVideoForm.get(formControlName);

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

  deleteVideo() {
    try {
      this.cursoService
        .deleteCurso(this.idCurso)
        .then((res) => {
          alert("Curso deletado com sucesso");
        })
        .catch(console.error);

      this.router.navigate(["/admin"]);
    } catch (error) {
      console.error(error);
    }
  }
}
