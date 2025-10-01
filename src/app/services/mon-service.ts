import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonService {
  constructor() {}
  getRandomIndex(length: number) {
    return Math.floor(Math.random() * length);
  }
}
