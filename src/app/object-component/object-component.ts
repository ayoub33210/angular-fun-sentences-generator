import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonService } from '../services/mon-service';

@Component({
  selector: 'app-object-component',
  imports: [],
  templateUrl: './object-component.html',
  styleUrl: './object-component.css',
})
export class ObjectComponent {
  @Input() object_list = [
    'dans la poubelle',
    'avec sa grand-mère',
    'dans un cimetière',
    'avec un lama bourré',
    'au milieu du supermarché',
    'dans les toilettes publiques',
    'avec un pigeon mort',
    'dans un jacuzzi de mayonnaise',
    'sur le toit d’une école',
    'dans un bus scolaire',
    'avec une chèvre aveugle',
    'dans la salle des profs',
    'avec un cadavre frais',
    'dans une boulangerie',
    'dans une cave humide',
    'avec un clown triste',
    'dans un hôpital psychiatrique',
    'au fond d’une piscine vide',
  ];

  @Output() object_parent = new EventEmitter<string>();
  constructor(private monService: MonService) {}
  ngOninit(): void {}
  sendObject() {
    this.object_parent.emit(
      this.object_list[this.monService.getRandomIndex(this.object_list.length)]
    );
  }
}
