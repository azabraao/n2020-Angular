import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  private apiUrl: string = "https://como-usa-backend.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  createCurso(data) {
    let endpoint = `${this.apiUrl}/curso/criar`;
    return this.httpClient
      .post(endpoint, data, {
        headers: {
          authorization: `${localStorage.userToken}`,
        },
      })
      .toPromise();
  }

  updateCurso(data, idCurso) {
    let endpoint = `${this.apiUrl}/curso/atualiza`;
    return this.httpClient
      .put(endpoint, data, {
        headers: {
          id_curso: idCurso,
          authorization: `${localStorage.userToken}`,
        },
      })
      .toPromise();
  }

  deleteCurso(idCurso) {
    let endpoint = `${this.apiUrl}/curso/deleta`;
    return this.httpClient
      .delete(endpoint, {
        headers: {
          id_curso: idCurso,
          authorization: `${localStorage.userToken}`,
        },
      })
      .toPromise();
  }

  getCursos() {
    let endpoint = `${this.apiUrl}/cursos`;
    return this.httpClient.get(endpoint).toPromise();
  }

  getCurso(id) {
    let endpoint = `${this.apiUrl}/curso`;
    return this.httpClient
      .get(endpoint, { headers: { id_curso: id } })
      .toPromise();
  }
}
