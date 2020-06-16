import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { InsideLayoutComponent } from "./layout/inside-layout/inside-layout.component";
import { HomeComponent } from "./layout/home/home.component";
import { NovoVideoComponent } from "./layout/novo-video/novo-video.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  {
    path: "login",
    component: AuthLoginComponent,
  },
  {
    path: "novo-video",
    canActivate: [AuthGuard],
    component: NovoVideoComponent,
  },

  {
    path: "",
    component: InsideLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
