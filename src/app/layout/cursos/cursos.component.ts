import { Component, OnInit } from "@angular/core";
import { CursoService } from "src/app/services/curso.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.scss"],
})
export class CursosComponent implements OnInit {
  public cursos: any = [];

  constructor(
    public cursoService: CursoService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    console.log(this.route.snapshot.params);
    try {
      this.cursos = await this.cursoService.getCursos();
    } catch (error) {
      console.error(error);
    }
  }
}
