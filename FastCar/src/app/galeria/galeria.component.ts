import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  category: string = 'All';
  smalPhotos: string[] = ['https://picsum.photos/300/200', 'https://picsum.photos/300/200', 'https://picsum.photos/300/200', 'https://picsum.photos/300/200'];

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category: string): void {
    this.category = category;
  }
}
