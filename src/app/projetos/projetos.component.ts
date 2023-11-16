import { Component, OnInit} from '@angular/core';
import { MenuService } from '../services/menu.service';

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

   imageLinks: string[] = [
    'https://github.com/joaog0liveira/to-do-list-java-spring',
    'https://github.com/joaog0liveira/livraria-virtual',
    'https://github.com/joaog0liveira/landing-page',
    'https://github.com/joaog0liveira/Trabalho3ED2'
  ];

  constructor(private menuService: MenuService) {
    this.menuService.showMenu = true; 
  }

  ngOnInit(): void {
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
