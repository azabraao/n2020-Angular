import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InsideLayoutComponent } from "./inside-layout/inside-layout.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NovoVideoComponent } from "./novo-video/novo-video.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { EditarVideoComponent } from './editar-video/editar-video.component';

@NgModule({
  declarations: [
    InsideLayoutComponent,
    NavbarComponent,
    HomeComponent,
    NovoVideoComponent,
    CursosComponent,
    CursoComponent,
    BottomNavComponent,
    EditarVideoComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class LayoutModule {}
