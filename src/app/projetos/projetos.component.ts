import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit{
  currentIndex = 0;
  images: string[] = [
    'assets/img/slide1.jpeg',
    'assets/img/css.png',
    'assets/img/html.png'
  ];

  constructor() {}

  ngOnInit(): void {
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
