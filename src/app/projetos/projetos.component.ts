import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {
  count: number = 1;

  ngOnInit() {
    const radio1 = document.getElementById("radio1") as HTMLInputElement | null;
    if (radio1) {
      radio1.checked = true;
    }

    setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  nextImage() {
    this.count++;
    if (this.count > 4) {
      this.count = 1;
    }

    const radioElement = document.getElementById("radio" + this.count) as HTMLInputElement | null;
    if (radioElement) {
      radioElement.checked = true;
    }
  }
}
