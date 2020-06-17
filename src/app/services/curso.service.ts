import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  private apiUrl: string = "http://localhost:3333";

  constructor(private httpClient: HttpClient) {}

  createCurso(data) {
    console.log("sou função sim amigao", data);
    let endpoint = `${this.apiUrl}/curso/criar`;
    return this.httpClient.post(endpoint, data).toPromise();
  }

  getCursos() {
    let endpoint = `${this.apiUrl}/cursos`;
    return this.httpClient.get(endpoint).toPromise();
  }
}
