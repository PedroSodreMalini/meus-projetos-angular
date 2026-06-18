import { Component } from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [],
  templateUrl: './let.component.html',
  styleUrl: './let.component.css'
})
export class LetComponent {
  pessoas = [
    { id: 0, nome: 'Pedro', idade: 28, endereco: { rua: "Rua de Tal", numero: '123' }},
    { id: 1, nome: 'Letícia', idade: 23 },
  ];

  removerPessoa() {
    this.pessoas.pop();
  }

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }
}
