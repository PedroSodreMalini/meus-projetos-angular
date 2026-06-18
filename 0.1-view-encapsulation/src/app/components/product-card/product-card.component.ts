import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-product-card',
  imports: [CustomButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  // encapsulation: ViewEncapsulation.None -> torna a estilização global.
  // Não faz sentido fazer isso acima com um componente.
})
export class ProductCardComponent {

}
