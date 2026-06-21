import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit{
  meuSubject$: Subject<string> = new Subject<string>()
  
  ngOnInit(): void {
    this.meuSubject$.next("Não chego em ninguém!");

    this.primeiraInscricao()

    this.meuSubject$.next("Primeiro valor emitido!")

    this.segundaInscricao()

    this.meuSubject$.next("Segundo valor emitido!")
  }

  primeiraInscricao() {
    this.meuSubject$.subscribe((value) => {
      console.log("Primeira inscrição: ", value)
    })
  }

  segundaInscricao() {
    this.meuSubject$.subscribe((value) => {
      console.log("Segunda inscrição: ", value)
    })
  }
}
