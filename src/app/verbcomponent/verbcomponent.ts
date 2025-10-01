import { Component, EventEmitter, Output, Input } from '@angular/core';
import { MonService } from '../services/mon-service';

@Component({
  selector: 'app-verbcomponent',
  standalone: true,
  templateUrl: './verbcomponent.html',
  styleUrl: './verbcomponent.css',
})
export class Verbcomponent {
  @Input() verb_list = [
    'pète',
    'sabre',
    'détruit',
    'sabote',
    'arnaque',
    'insulte',
    'empoisonne',
    'trolle',
    'triche',
    'kidnappe',
    'vole',
    'dégomme',
    'casse',
    'massacre',
    'explose',
    'tabasse',
    'crache',
    'humilie',
    'arnaque encore',
    'mange',
  ];

  @Output() verb_parent = new EventEmitter<string>();
  constructor(private monService: MonService) {}
  ngOninit(): void {}
  sendVerb() {
    this.verb_parent.emit(this.verb_list[this.monService.getRandomIndex(this.verb_list.length)]);
  }
}
