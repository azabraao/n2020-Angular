import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  public menuItems: any;
  public animationClass: string = "animate";
  public target: any;
  public btn: any = $("#button");

  constructor() {}

  ngOnInit() {
    this.menuItems = document.querySelectorAll('.menu-nav a[href^="#"]');
    this.menuItems.forEach((item) => {
      item.addEventListener("click", this.scrollToIdOnClick.bind(this));
    });

    this.target = document.querySelectorAll("[data-anime]");

    if (this.target.length) {
      window.addEventListener(
        "scroll",
        this.debounce(
          () => {
            this.animeScroll();
          },
          200,
          false
        )
      );
    }

    $(window).scroll(() => {
      if ($(window).scrollTop() > 300) {
        this.btn.addClass("show");
      } else {
        this.btn.removeClass("show");
      }
    });

    this.btn.on("click", (e) => {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
  }

  // Animação Menu

  getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: "smooth",
    });
    // this.smoothScrollTo(0, to);
  }

  scrollToIdOnClick(event) {
    event.preventDefault();
    const to = this.getScrollTopByHref(event.currentTarget) - 80;
    this.scrollToPosition(to);
  }

  // Animação itens
  debounce(func, wait, immediate) {
    let timeout;
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    this.target.forEach((element) => {
      if (windowTop > element.offsetTop) {
        element.classList.add(this.animationClass);
      } else {
        element.classList.remove(this.animationClass);
      }
    });
  }

  // animeScroll();

  // Animação Botão topo
}
