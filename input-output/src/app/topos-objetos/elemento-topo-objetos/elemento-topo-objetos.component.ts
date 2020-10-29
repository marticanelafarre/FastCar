import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topo } from '../topo';

@Component({
  selector: 'app-elemento-topo-objetos',
  templateUrl: './elemento-topo-objetos.component.html',
  styleUrls: ['./elemento-topo-objetos.component.css']
})
export class ElementoTopoObjetosComponent implements OnInit {

  @Input() topo: Topo;
  @Output() selectEvent = new EventEmitter<Topo>();

  constructor() { }

  ngOnInit() {
  }

  topoSelected() {
    this.selectEvent.emit(this.topo);
  }

}
