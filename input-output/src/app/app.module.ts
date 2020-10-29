import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaToposComponent } from './topos-simple/lista-topos/lista-topos.component';
import { DetalleTopoComponent } from './topos-simple/detalle-topo/detalle-topo.component';
import { ListaToposObjetosComponent } from './topos-objetos/lista-topos-objetos/lista-topos-objetos.component';
import { DetalleTopoObjetosComponent } from './topos-objetos/detalle-topo-objetos/detalle-topo-objetos.component';
import { ElementoTopoObjetosComponent } from './topos-objetos/elemento-topo-objetos/elemento-topo-objetos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaToposComponent,
    DetalleTopoComponent,
    ListaToposObjetosComponent,
    DetalleTopoObjetosComponent,
    ElementoTopoObjetosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
