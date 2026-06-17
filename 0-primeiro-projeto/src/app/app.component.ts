import { Component } from '@angular/core';
import { MeuBotaoComponent } from './meu-botao/meu-botao.component';
import { BotaoFlatComponent } from './botao-flat/botao-flat.component';
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { DinamicTextComponent } from './components/style-binding/dinamic-text/dinamic-text.component';
import { ProgressBarComponent } from './components/style-binding/progress-bar/progress-bar.component';
import { SquarePopupComponent } from './components/style-binding/square-popup/square-popup.component';

@Component({
  selector: 'app-root',
  imports: [
    MeuBotaoComponent,
    BotaoFlatComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    TwoWayDataBindingComponent,
    DinamicTextComponent,
    ProgressBarComponent,
    SquarePopupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
