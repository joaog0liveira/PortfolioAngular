import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  constructor(private menuService: MenuService) {
    this.menuService.showMenu = true; // Defina showMenu como false para ocultar o menu neste componente.
  }
}
