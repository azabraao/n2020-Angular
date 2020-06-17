import { Component, OnInit } from "@angular/core";
import { CursoService } from "src/app/services/curso.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"],
})
export class CursosComponent implements OnInit {
  public cursos: any = [];

  constructor(public cursoService: CursoService) {}

  async ngOnInit() {
    try {
      this.cursos = await this.cursoService.getCursos();
    } catch (error) {
      console.error(error);
    }
  }
}
