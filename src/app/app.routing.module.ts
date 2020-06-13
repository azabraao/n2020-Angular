import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "login",
    component: AuthLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
