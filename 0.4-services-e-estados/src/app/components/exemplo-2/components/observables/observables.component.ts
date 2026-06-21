import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-observables',
  /* 
  Async Pipe se desinscreve do Observable automaticamente
  evitando uso de ngOnDestroy para se desinscrever.
  */
  imports: [AsyncPipe],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit, OnDestroy {
  meuObservable$!: Observable<number>;
  meuObservableLista$!: Observable<string[]>;
  meuSubscription!: Subscription;
  
  ngOnInit(): void {
    this.criarObservable()
    this.inscricao1();
    this.criarObservableLista()
    this.inscricaoListaMaiuscula()
    this.inscricaoImpares()
    this.inscricaoTap()
  }

  ngOnDestroy(): void {
    this.meuSubscription?.unsubscribe()
  }

  criarObservable() {
    this.meuObservable$ = new Observable<number>((subscriber) => {
      console.log("Executando observable:")
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      // recebe depois de 4 segundos.
      setTimeout(() => { 
        subscriber.next(4)
      }, 4000)
    })
  }

  // roda o criar observable, pois se inscreve no observable.
  inscricao1() {
    this.meuSubscription = this.meuObservable$.subscribe((value) => {
      console.log(value)
    });
  }

  criarObservableLista() {
    this.meuObservableLista$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['Pedro', 'Letícia', 'Vicente'])
      }, 5000)
    })
  }

  // uso de map do rxjs
  inscricaoListaMaiuscula(){
    this.meuObservableLista$
    .pipe(
      map((lista) => {
        return lista.map((nome) => nome.toUpperCase())
      })
    )
    .subscribe((lista) => {
      console.log("===== Lista maiúscula =====")
      console.log(lista)
    })
  }

  // uso do filter do rxjs
  inscricaoImpares(){
    this.meuObservable$
    .pipe(
      filter((numero) => numero % 2 == 1)
    )
    .subscribe((numero) => {
      console.log("===== Número ímpar =====")
      console.log(numero)
    })
  }

  // uso do tap -> usar log no pipe.
  inscricaoTap() {
    this.meuObservable$
      .pipe(
        tap((numero) => console.log("Tap:", numero))
      )
      .subscribe()
  }

}
