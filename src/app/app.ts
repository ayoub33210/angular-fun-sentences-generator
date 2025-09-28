import { Component, signal } from '@angular/core';
import { SubjectComponent } from './subject-component/subject-component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SubjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fun-sentences-generator');
  message = '';
  btn = 'generate';
  showMessage() {
    this.message = 'yepa';
  }
  receiveSubject(msg: string) {
    this.message = msg;
  }
}
