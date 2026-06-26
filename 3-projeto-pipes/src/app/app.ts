import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from './components/custom-pipe/custom-pipe';

@Component({
  selector: 'app-root',
  imports: [
    SlicePipe,
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    JsonPipe,
    PercentPipe, // precisa configurar locale pt-BR no main.ts e no app.config.
    DecimalPipe,
    CurrencyPipe, // é possível mudar a moeda padrão no app.config tendo o locale.
    DatePipe,
    CustomPipe,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sliceP = "abcdef"
  produtos = ['Celular', "Mouse", "Computador", "Teclado", "Monitor", "Mousepad"]
  word = "AbCdEf"
  palavra = "eu gosto de comprar bala"
  objeto = {
    name: "Pedro",
    surname: "Malini",
  }
  npercentage = 0.123456
  preco = 1200.99
  data_atual = new Date();
}
