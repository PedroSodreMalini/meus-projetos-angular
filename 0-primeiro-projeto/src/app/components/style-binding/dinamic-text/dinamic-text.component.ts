import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  templateUrl: './dinamic-text.component.html',
  styleUrl: './dinamic-text.component.css'
})
export class DinamicTextComponent {
  tamanho = 16

  aumentaTamanho() {
    this.tamanho = Math.min(this.tamanho + 1, 48)
  }

  diminuiTamanho() {
    this.tamanho = Math.max(this.tamanho - 1, 4)
  }
}
