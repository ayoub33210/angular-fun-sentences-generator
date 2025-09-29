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
  @Output() subject_parent = new EventEmitter<string>();
  // constructor(private monService: MonService){}
  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.subject_parent = this.monService.getRandomIndex(this.subject_word.length)
  // }
  sendSubject() {
    // 🔹 génère un index aléatoire
    const randomI = Math.floor(Math.random() * this.subject_word.length);
    // 🔹 émet le sujet choisi vers le parent
    this.subject_parent.emit(this.subject_word[randomI]);
  }
}
