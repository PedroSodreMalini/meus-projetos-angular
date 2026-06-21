import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-counter',
  imports: [AsyncPipe],
  templateUrl: './products-counter.component.html',
  styleUrl: './products-counter.component.css'
})
export class ProductsCounterComponent {
  readonly _productsService = inject(ProductsService)
}
