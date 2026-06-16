import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-botao',
  imports: [],
  templateUrl: './meu-botao.component.html',
  styleUrl: './meu-botao.component.css'
})
export class MeuBotaoComponent {
  filtrar() {
    console.log("Método filtrar")
  }
}
