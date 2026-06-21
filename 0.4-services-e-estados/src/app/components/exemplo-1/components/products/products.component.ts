import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from "../products-list/products-list.component";
import { ProductsCounterComponent } from "../products-counter/products-counter.component";

@Component({
  selector: 'app-products',
  imports: [ProductsListComponent, ProductsCounterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productsList: any[] = []

  ngOnInit(): void {
    this._productsService.products$.subscribe((productsList) => {
      console.log("Products Component productsList: ", productsList)

      this.productsList = productsList
    })
  }

  readonly _productsService = inject(ProductsService)

  adicionarProduto() {
    this._productsService.adicionarProduto(
      3,
      "Playstation 5",
      5000
    )
  }

  removerProduto(id: number) {
    this._productsService.removerProduto(id)
  }

  modificarLista() {
    this.productsList = []
  }
}
