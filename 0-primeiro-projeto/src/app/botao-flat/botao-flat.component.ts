import { Component } from '@angular/core';

@Component({
  selector: 'app-botao-flat',
  imports: [],
  template: `
    <button class="btn btn-flat" (click)="limpar()">
      Limpar filtro
    </button>
  `,
  styles: `
  .btn {
    --primary-orange: #f55a00;
    --white: #ffffff;

    font-family: Arial, sans-serif;
    padding: 12px 15px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    min-width: 150px;
    text-align: center;
    box-sizing: border-box;
  }
  .btn-flat {
    background-color: var(--white);
    border: 2px solid var(--primary-orange);
    color: var(--primary-orange);
  }
  `
})
export class BotaoFlatComponent {
  limpar() {
    console.log("Método limpar")
  }
}
