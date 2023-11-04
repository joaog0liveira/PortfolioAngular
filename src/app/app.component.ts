import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioAngular';

  constructor(public menuService: MenuService) {}

  toggleMenu() {
    this.menuService.showMenu = !this.menuService.showMenu;
  }
}
