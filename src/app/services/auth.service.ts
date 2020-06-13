import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl: string = "http://localhost:3333";

  constructor(private httpClient: HttpClient) {}

  login(data): Promise<any> {
    let endpoint = `${this.apiUrl}/login`;
    return this.httpClient.post(endpoint, data).toPromise();
  }

  setLoggedUser(token, user) {
    try {
      token = JSON.stringify(token);
      localStorage.setItem("loggedUser", token);
      user = JSON.stringify(user);
      localStorage.setItem("loggedUser", user);
    } catch (error) {
      console.log(error);
    }
  }

  getLoggedUser() {
    try {
      let userDataString = localStorage.getItem("loggedUser");
      let userData = JSON.parse(userDataString);
      return userData;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  clearStorage() {
    localStorage.clear();
  }
}
