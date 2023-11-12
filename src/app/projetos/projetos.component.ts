import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit{
  currentIndex = 0;
  images: string[] = [
    'assets/img/todolist.png',
    'assets/img/livraria.png',
    'assets/img/landing.png',
    'assets/img/rota.png'
  ];

   // Adicione os links correspondentes às imagens
   imageLinks: string[] = [
    'https://link-do-todolist',
    'https://link-da-livraria',
    'https://link-da-landing',
    'https://link-da-rota'
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
