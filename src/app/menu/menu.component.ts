import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  header: HTMLElement | null = null;

  ngOnInit() {
    this.header = document.querySelector("header");

    if (this.header) {
      window.addEventListener("scroll", () => {
        this.header?.classList.toggle("sticky", window.scrollY > 120);
      });
    }
  }
}
