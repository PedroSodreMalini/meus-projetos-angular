import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  public progressao: number = 0;

  aumentarProgresso(){
    this.progressao = Math.min(this.progressao + 10, 300)
  }
}
