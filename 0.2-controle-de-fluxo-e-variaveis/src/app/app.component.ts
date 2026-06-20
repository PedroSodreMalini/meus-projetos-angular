import { Component } from '@angular/core';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { LetComponent } from './components/let/let.component';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  imports: [
    IfComponent,
    SwitchComponent,
    ForComponent,
    LetComponent,
    InputComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
