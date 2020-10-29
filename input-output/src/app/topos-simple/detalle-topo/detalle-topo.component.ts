import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-topo',
  templateUrl: './detalle-topo.component.html',
  styleUrls: ['./detalle-topo.component.css']
})
export class DetalleTopoComponent implements OnInit {

  @Input() topo: string;

  constructor() { }

  ngOnInit() {
  }

}
