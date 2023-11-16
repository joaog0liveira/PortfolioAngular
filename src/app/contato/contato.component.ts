import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  constructor(private menuService: MenuService) {
    this.menuService.showMenu = false; // definindo showMenu como false para ocultar
    // o menu neste componente.
  }
}
