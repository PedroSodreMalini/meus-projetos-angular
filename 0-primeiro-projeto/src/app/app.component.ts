import { Component } from '@angular/core';
import { MeuBotaoComponent } from './meu-botao/meu-botao.component';
import { BotaoFlatComponent } from './botao-flat/botao-flat.component';
import { EventBindingComponent } from "./event-binding/event-binding.component";

@Component({
  selector: 'app-root',
  imports: [MeuBotaoComponent, BotaoFlatComponent, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
