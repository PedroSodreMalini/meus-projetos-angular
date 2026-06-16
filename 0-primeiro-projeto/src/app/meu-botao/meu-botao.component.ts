import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-botao',
  imports: [],
  templateUrl: './meu-botao.component.html',
  styleUrl: './meu-botao.component.css'
})
export class MeuBotaoComponent {
  limpar() {
    console.log("Método limpar")
  }

  filtrar() {
    console.log("Filtrar")
  }
}
