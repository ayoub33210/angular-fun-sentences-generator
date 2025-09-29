import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-verbcomponent',
  standalone: true,
  templateUrl: './verbcomponent.html',
  styleUrl: './verbcomponent.css',
})
export class Verbcomponent {
  @Input() verb_word = [
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
  ];

  @Output() verb_parent = new EventEmitter<string>();

}
