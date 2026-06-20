import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface IPessoa {
  id: number
  nome: string
  idade: number
  endereco?: {
    rua: string
    numero: string
  }
}

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent implements OnChanges, OnInit {
  @Input({
    // required: true -> seta o parametro como obrigatório ao chamar o omponente.
    // alias: "p" -> o atributo se chamaria p ao invés de pessoa.
  }) pessoa!: IPessoa;

  @Output() removerPessoaEmit = new EventEmitter<number>();

  // chamado primeiro
  // this.pessoa é undefined -> não foi montado ainda.
  // na prática não se usa.
  constructor() {
    console.log("===== constructor =====")
    console.log(this.pessoa)
  }

  // chamado segundo
  // this.pessoa já está instanciado -> é possivel ver o valor de 'pessoa'
  // usado para ser feito para inicializar coisas, ex: chamar requisição http.
  ngOnInit(): void {
    console.log("===== ngOnInit =====")
    console.log(this.pessoa)
  }

  // lida com alteração de variáveis dentro de componentes
  // não é recomendado usar this.ngOnChanges ...
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes)
  }

  removerPessoa(pessoaId: number) {
    this.removerPessoaEmit.emit(pessoaId)
  }
}
