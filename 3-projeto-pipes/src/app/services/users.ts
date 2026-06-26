import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  public getUsers() {
    return of([
      { name:'Pedro', status: 1},
      { name:'Leticia', status: 0},
    ])
  }
}
