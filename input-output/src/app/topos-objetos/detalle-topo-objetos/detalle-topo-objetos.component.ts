import { Component, OnInit, Input } from '@angular/core';
import { Topo } from '../topo';

@Component({
  selector: 'app-detalle-topo-objetos',
  templateUrl: './detalle-topo-objetos.component.html',
  styleUrls: ['./detalle-topo-objetos.component.css']
})
export class DetalleTopoObjetosComponent implements OnInit {

  @Input() topo: Topo;

  constructor() { }

  ngOnInit() {
    this.topo = new Topo();
    this.topo.nombre = '';
    this.topo.edat = 0;
    this.topo.hijos = 0;
  }

}
