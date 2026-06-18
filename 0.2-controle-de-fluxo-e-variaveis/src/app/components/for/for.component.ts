import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number
  name: string
  price: number
}

@Component({
  selector: 'app-for',
  imports: [DecimalPipe],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  products: Product[] = [
    { id: 1, name: "Nike", price: 30.00 },
    { id: 2, name: "Adidas", price: 20.00 },
    { id: 3, name: "Puma", price: 10.00 },
  ]
  atualizarLista() {
    this.products = [
      { id: 1, name: "Flamengo", price: 30.00 },
      { id: 2, name: "Vasco", price: 20.00 },
      { id: 3, name: "Botafogo", price: 10.00 },
    ]
  }

  removerProduto(id: number) {
    this.products = this.products.filter((p) => p.id !== id)
  }
}
