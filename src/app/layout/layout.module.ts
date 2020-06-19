import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InsideLayoutComponent } from "./inside-layout/inside-layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NovoCursoComponent } from "./novo-curso/novo-curso.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CursosComponent } from "./cursos/cursos.component";
import { CursoComponent } from "./curso/curso.component";
import { BottomNavComponent } from "./bottom-nav/bottom-nav.component";
import { EditarCursoComponent } from "./editar-curso/editar-curso.component";
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    InsideLayoutComponent,
    NavbarComponent,
    HomeComponent,
    NovoCursoComponent,
    CursosComponent,
    CursoComponent,
    BottomNavComponent,
    EditarCursoComponent,
    LandingPageComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LayoutModule {}
