import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  private apiUrl: string = "https://como-usa-backend.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  createCurso(data) {
    console.log("sou função sim amigao", data);
    let endpoint = `${this.apiUrl}/curso/criar`;
    return this.httpClient
      .post(endpoint, data, {
        headers: {
          authorization: `${localStorage.userToken}`,
        },
      })
      .toPromise();
  }

  getCursos() {
    let endpoint = `${this.apiUrl}/cursos`;
    return this.httpClient.get(endpoint).toPromise();
  }
}
