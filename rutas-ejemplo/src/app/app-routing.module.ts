import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Componente1Component} from'./componente1/componente1.component'
import {Componente2Component} from'./componente2/componente2.component'
import {PaginaNoEncontradaComponent} from'./pagina-no-encontrada/pagina-no-encontrada.component'

const routes: Routes = [
  {path: 'contenido1', component: Componente1Component},
  {path: 'contenido2', component: Componente2Component},
  {path: 'contenido3', component: Componente2Component},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
