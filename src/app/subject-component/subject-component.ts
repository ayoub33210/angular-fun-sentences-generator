import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subject-component',
  standalone: true,
  templateUrl: './subject-component.html', // 🔹 template de l’enfant
  styleUrls: ['./subject-component.css'], // 🔹 styles de l’enfant
})
export class SubjectComponent {
  // ✅ Input : permet au parent de passer une liste de sujets personnalisés
  @Input() subject_word = [
    'Bébé démon',
    'Clown meurtrier',
    'Chien cannibale',
    'Prêtre voleur',
    'Prof sadique',
    'Politicien zombie',
    'Pape gangster',
    'Fœtus râleur',
    'Ange pervers',
    'Père Noël toxico',
  ];

  // ✅ Output : permet à l’enfant d’envoyer un message au parent
  @Output() message_subject = new EventEmitter<string>();

  sendSubject() {
    // 🔹 génère un index aléatoire
    const randomI = Math.floor(Math.random() * this.subject_word.length);
    // 🔹 émet le sujet choisi vers le parent
    this.message_subject.emit(this.subject_word[randomI]);
  }
}
