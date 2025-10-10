import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/mon-service';
@Component({
  selector: 'app-phrase-component',
  imports: [],
  templateUrl: './phrase-component.html',
  styleUrl: './phrase-component.css',
})
export class PhraseComponent {
  @Output() phrase_parent = new EventEmitter<{ subject: String; verb: String; object: String }>();
  // sendData(subject: string, verb: string, object: string){
  //   this.subject_parent.emit(
  //   )
  // }
  constructor(private data: DataService) {}
  getData(){
    // this.data.getPhrase(this.sp,this.vp,this.op)
  }

}
