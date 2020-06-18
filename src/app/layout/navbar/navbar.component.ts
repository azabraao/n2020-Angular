import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  public menuAtivo: boolean = false;
  public isLogged: boolean = !!localStorage.loggedUser;
  public backToHome: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (window.location.pathname !== "/") {
      this.backToHome = true;
    }
  }

  handleMenuClick() {
    this.menuAtivo === true
      ? (this.menuAtivo = false)
      : (this.menuAtivo = true);
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigate(["/login"]);
  }
}
