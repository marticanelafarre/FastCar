import { Component } from '@angular/core';
import { Topo } from './topos-objetos/topo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Primer Ejemplo
  topo = '';
  mostrar = true;

  cambiarTopo(nombreTopo) {
    this.topo = nombreTopo;
  }

  cambioEjemplo() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar);
  }

  // Segundo Ejemplo
  topoSeleccionado: Topo;

  cambiarTopoSeleccionado(topo) {
    this.topoSeleccionado = topo;
  }
}
