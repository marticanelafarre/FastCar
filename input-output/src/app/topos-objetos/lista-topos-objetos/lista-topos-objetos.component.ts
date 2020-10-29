import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topo } from '../topo';

@Component({
  selector: 'app-lista-topos-objetos',
  templateUrl: './lista-topos-objetos.component.html',
  styleUrls: ['./lista-topos-objetos.component.css']
})
export class ListaToposObjetosComponent implements OnInit {

  topos = [new Topo(), new Topo(), new Topo()];
  @Output() informarEvent = new EventEmitter<Topo>();

  constructor() { }

  ngOnInit() {
    this.topos[0].nombre = 'Perico';
    this.topos[0].edat = 22;
    this.topos[0].hijos = 4;

    this.topos[1].nombre = 'Mariano';
    this.topos[1].edat = 12;
    this.topos[1].hijos = 0;

    this.topos[2].nombre = 'Kiko';
    this.topos[2].edat = 35;
    this.topos[2].hijos = 1;
  }

  informarTopo(event) {
    this.informarEvent.emit(event);
  }

}
