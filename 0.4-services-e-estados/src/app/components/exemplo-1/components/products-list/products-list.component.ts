import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [AsyncPipe],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  readonly _productsService = inject(ProductsService)
}
