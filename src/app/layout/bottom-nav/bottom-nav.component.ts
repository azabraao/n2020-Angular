import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bottom-nav",
  templateUrl: "./bottom-nav.component.html",
  styleUrls: ["./bottom-nav.component.scss"],
})
export class BottomNavComponent implements OnInit {
  public actualVideo: string = localStorage.videoId;
  public actualVideoTitle: string = localStorage.videoTitle;

  constructor(private router: Router) {}

  ngOnInit() {}
}
