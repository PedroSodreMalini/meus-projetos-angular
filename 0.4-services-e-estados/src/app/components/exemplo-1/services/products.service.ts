import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";

interface IProduct {
    id: number
    preco: number
    nome: string
}

@Injectable({
    providedIn: 'root' // a mesma instância de service pra tudo.
})
export class ProductsService {
    // Começa produtos com esses dados
    private products = new BehaviorSubject<IProduct[]>([
        { id: 1, nome: "Mouse", preco: 100 },
        { id: 2, nome: "Monitor", preco: 1000 },
    ])

    // clona os produtos
    readonly products$ = this.products.asObservable().pipe(
        map((products) => structuredClone(products))
    )
    
    adicionarProduto(id: number, nome: string, preco: number) {
        const newProductsList = [...this.products.getValue(), { id, nome, preco}];

        this.products.next(newProductsList);
    }

    removerProduto(id: number) {
        const newProductsList = this.products.getValue().filter(p => p.id !== id)

        this.products.next(newProductsList);
    }
}