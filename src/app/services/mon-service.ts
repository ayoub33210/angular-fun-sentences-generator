import { Injectable } from '@angular/core';
// import { SubjectComponent } from '../subject-component/subject-component';
// import { Verbcomponent } from '../verb-component/verb-component';
// import { ObjectComponent } from '../object-component/object-component';

@Injectable({
  providedIn: 'root',
})
export class MonService {
  constructor() {}
  getRandomIndex(length: number) {
    return Math.floor(Math.random() * length);
  }
}

export class DataService {
  constructor() {}
  subject = '';
  verb = '';
  object = '';
  // getSubject() {
  //   return this.subject;
  // }
  // getVerb() {
  //   return this.verb;
  // }
  // getObject() {
  //   return this.object;
  // }
  getPhrase(sp: any, vp: any, op: any) {
    return {
      sp: this.subject,
      vp: this.verb,
      op: this.object,
    };
  }
}
