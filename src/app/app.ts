import { Component, signal } from '@angular/core';
import { SubjectComponent } from './subject-component/subject-component';
import { ObjectComponent } from './object-component/object-component';
import { Verbcomponent } from './verb-component/verb-component';
// import { PhraseComponent } from './phrase-component/phrase-component';
@Component({
  selector: 'app-root',
  imports: [SubjectComponent,ObjectComponent,Verbcomponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fun-sentences-generator');
  mot1 = '';
  mot2 = '';
  mot3 = '';
  receiveSubject(msg: string) {
    this.mot1 = msg;
  }
  receiveVerb(msg2: string) {
    this.mot2 = msg2;
  }
  receiveObject(msg3: string) {
    this.mot3 = msg3;
  }
  createSentence(msg: string, msg2: string, msg3: string) {
    this.mot1 = msg;
    this.mot2 = msg2;
    this.mot3 = msg3;

  }
}
