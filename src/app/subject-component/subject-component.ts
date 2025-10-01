import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MonService } from '../services/mon-service';

@Component({
  selector: 'app-subject-component',
  standalone: true,
  templateUrl: './subject-component.html', // 🔹 template de l’enfant
  styleUrls: ['./subject-component.css'], // 🔹 styles de l’enfant
})
export class SubjectComponent {
  // ✅ Input : permet au parent de passer une liste de sujets personnalisés
  @Input() subject_list = [
    'Le bébé démon',
    'Le clown meurtrier',
    'Le chien cannibale',
    'Le prêtre voleur',
    'Le prof sadique',
    'Le politicien zombie',
    'Le pape gangster',
    'Le fœtus râleur',
    'L’ange pervers',
    'Le Père Noël toxico',
    'La sorcière ivrogne',
    'Le hamster psychopathe',
    'La licorne bipolaire',
    'Le pirate sénile',
    'Le dentiste sadique',
    'La mouche radioactive',
    'Le serveur schizophrène',
    'Le singe pyromane',
    'La grenouille vulgaire',
    'Le vampire obèse',
  ];

  // ✅ Output : permet à l’enfant d’envoyer un message au parent
  @Output() subject_parent = new EventEmitter<string>();
  constructor(private monService: MonService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  sendSubject() {
    // const idx = this.monService.getRandomIndex(this.subject_word.length);
    // const chosen = this.subject_word[idx];
    // 🔹 émet le sujet choisi vers le parent
    this.subject_parent.emit(
      this.subject_list[this.monService.getRandomIndex(this.subject_list.length)]
    );
  }
}
