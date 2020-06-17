import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-curso",
  templateUrl: "./curso.component.html",
  styleUrls: ["./curso.component.scss"],
})
export class CursoComponent implements OnInit {
  public videoHeight: number = 200;

  constructor() {}

  ngOnInit() {
    this.videoHeight = window.innerWidth / 2;

    window.addEventListener("resize", this.resizeVideo);
  }
  resizeVideo() {
    if (window.innerWidth !== 1200) {
      let iframe = document.querySelector(".jsVideoCurso");
      iframe.style.height = window.innerWidth / 2 + "px";
    }
  }
}
