import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  imports: [],
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.css'
})
export class BehaviourSubjectComponent implements OnInit{
  meuBehaviourSubject$ = new BehaviorSubject<string>("Primeiro valor")

  ngOnInit(): void {
    this.primeiraInscricao()
    this.meuBehaviourSubject$.next("Segundo valor")
    this.segundaInscricao()
    this.meuBehaviourSubject$.next("Terceiro valor")
  }

  primeiraInscricao(){
    this.meuBehaviourSubject$.subscribe(value => {
      console.log(`Primeira inscrição: ${value}`)
    })
  }

  emitirValor() {
    this.meuBehaviourSubject$.next("Valor enviado")
  }

  segundaInscricao() {
    this.meuBehaviourSubject$.subscribe(value => {
      console.log(`Segunda inscrição: ${value}`)
    })
  }
}
