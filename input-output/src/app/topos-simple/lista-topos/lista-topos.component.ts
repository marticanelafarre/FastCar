import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-topos',
  templateUrl: './lista-topos.component.html',
  styleUrls: ['./lista-topos.component.css']
})
export class ListaToposComponent implements OnInit {

  @Output() topoSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  seleccionarTopo(evento) {
    const nombreTopo = evento.target.text;
    this.topoSelected.emit(nombreTopo);
  }

}
