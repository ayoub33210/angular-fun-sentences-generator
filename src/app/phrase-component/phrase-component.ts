import { Component,EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-phrase-component',
  imports: [],
  templateUrl: './phrase-component.html',
  styleUrl: './phrase-component.css',
})
export class PhraseComponent {
  @Output() subject_parent = new EventEmitter<{subject:String, verb:String, object: String}>()
  sendData(subject: string, verb: string, object: string){
    this.subject_parent.emit(
      
    )
  }
}
