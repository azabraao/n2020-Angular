import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl: string = "https://como-usa-backend.herokuapp.com";

  constructor(private httpClient: HttpClient) {}

  login(data): Promise<any> {
    let endpoint = `${this.apiUrl}/login`;
    return this.httpClient.post(endpoint, data).toPromise();
  }

  setLoggedUser(token, user) {
    try {
      localStorage.setItem("userToken", `Bearer ${token}`);
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
