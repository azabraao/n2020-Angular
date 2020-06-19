import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-curso",
  templateUrl: "./curso.component.html",
  styleUrls: ["./curso.component.scss"],
})
export class CursoComponent implements OnInit {
  public videoHeight: number = 200;
  public youtubeUrl: any = "";
  public titulo: string = "";

  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoHeight = window.innerWidth / 2;

    window.addEventListener("resize", this.resizeVideo);

    localStorage.videoId = this.route.snapshot.params.url;
    localStorage.videoTitle = this.route.snapshot.params.titulo;

    this.titulo = this.route.snapshot.params.titulo;
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.route.snapshot.params.url}`
    );
  }
  resizeVideo() {
    if (window.innerWidth < 1200) {
      let iframe = document.querySelector(".jsVideoCurso") as HTMLElement;
      iframe.style.height = window.innerWidth / 2 + "px";
    }
  }
}
