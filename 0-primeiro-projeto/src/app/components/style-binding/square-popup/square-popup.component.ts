import { Component } from '@angular/core';

@Component({
  selector: 'app-square-popup',
  imports: [],
  templateUrl: './square-popup.component.html',
  styleUrl: './square-popup.component.css'
})
export class SquarePopupComponent {
  posicaoH: number = 0
  altura: number = -10

  moverQuadrado() {
    this.posicaoH = (this.posicaoH + 10) % 100
  }

  togglePopup() {
    this.altura = this.altura === -10 ? 10 : -10;
  }
}
