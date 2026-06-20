import { Component } from '@angular/core';
import { IPessoa, PessoaComponent } from './components/pessoa/pessoa.component';

@Component({
  selector: 'app-input',
  imports: [PessoaComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  pessoas: IPessoa [] = [
    { id: 0, nome: 'Pedro', idade: 28, endereco: { rua: "Rua de Tal", numero: '123' }},
    { id: 1, nome: 'Letícia', idade: 23 },
  ];

  // para disparar ngOnChange para veto e memória
  // é preciso atualizar a referência, e não o atributo.
  mudarNome() {
    this.pessoas[0] = { ...this.pessoas[0], nome: "Pedro Sodré"}
  }

  removerPessoa() {
    this.pessoas.pop();
  }

  removerPessoaEspecifica(pessoaId: number) {
    this.pessoas = this.pessoas.filter((p) => p.id !== pessoaId)
  }

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }
}
