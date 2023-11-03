import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { AboutComponent } from './about/about.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  {path:'', component:PrincipalComponent},
  {path:'sobre', component:AboutComponent},
  {path:'projetos', component:ProjetosComponent},
  {path:'contato', component:ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
