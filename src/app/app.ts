import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { SubjectComponent } from './subject-component/subject-component';

@Component({
  selector: 'app-root',
  imports: [SubjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-fun-sentences-generator');
  
}
