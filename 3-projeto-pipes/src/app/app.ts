import { 
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValue,
  KeyValuePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
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
    KeyValuePipe,
    I18nSelectPipe,
    I18nPluralPipe,
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
  objeto2 = {
    cidade: "Salvador",
    estado: "Bahia",
    pais: "Brasil",
  }
  map = new  Map<string, number>([
    ['Computador', 25.00],
    ['Playstation', 4500.99],
    ['Xbox', 5000]
  ])
  npercentage = 0.123456
  preco = 1200.99
  data_atual = new Date();

  genderObject = {
    male: "Chamá-lo",
    female: "Chamá-la",
    other: "Chamar"
  }

  messageMapping = {
    '=0': 'No messages',
    '=1': 'One message',
    'other': "Many messages"
  }

  greatestFirst(a: KeyValue<string, number>, b: KeyValue<string, number>) {
    return b.value - a.value;
  }
}
