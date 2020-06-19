import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLoginComponent } from "./auth/auth-login/auth-login.component";
import { InsideLayoutComponent } from "./layout/inside-layout/inside-layout.component";
import { HomeComponent } from "./layout/home/home.component";
import { NovoVideoComponent } from "./layout/novo-video/novo-video.component";
import { AuthGuard } from "./services/auth.guard";
import { CursoComponent } from "./layout/curso/curso.component";
import { EditarVideoComponent } from "./layout/editar-video/editar-video.component";

const routes: Routes = [
  {
    path: "admin",
    component: AuthLoginComponent,
  },
  {
    path: "novo-video",
    canActivate: [AuthGuard],
    component: NovoVideoComponent,
  },
  {
    path: "editar-video/:id",
    canActivate: [AuthGuard],
    component: EditarVideoComponent,
  },

  {
    path: "",
    component: InsideLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "curso/:url/:titulo",
        component: CursoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
