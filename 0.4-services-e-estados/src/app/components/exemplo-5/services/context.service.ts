import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

interface Item {
  nome: string
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);

  // items não consegue mandar .next(), apenas fazer inscrição com/sem pipe.
  // |-- perfeito para ser enviado para os componentes :)
  // .pipe(map()) -> gera um clone dos valores em itemsSubject para preservar a lista original.
  // |-- logo, cada componente recebe uma cópia diferente
  items$ = this.itemsSubject.asObservable().pipe(
    map((itemsList) => { return structuredClone(itemsList) })
  );

  adicionarItem(item: Item) {
    const currentList = this.itemsSubject.value;

    this.itemsSubject.next([...currentList, item]);
  }

  // retorna cópia do valor armazenado
  retornarValor() {
    return structuredClone(this.itemsSubject.value);
  }
}
