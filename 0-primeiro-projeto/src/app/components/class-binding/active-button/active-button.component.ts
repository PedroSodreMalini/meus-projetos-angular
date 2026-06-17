import { Component } from '@angular/core';

@Component({
  selector: 'app-active-button',
  imports: [],
  templateUrl: './active-button.component.html',
  styleUrl: './active-button.component.css'
})
export class ActiveButtonComponent {
  isActive: boolean = true;

  public toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
