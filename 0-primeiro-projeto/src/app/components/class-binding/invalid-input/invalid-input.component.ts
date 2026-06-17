import { Component } from '@angular/core';

@Component({
  selector: 'app-invalid-input',
  imports: [],
  templateUrl: './invalid-input.component.html',
  styleUrl: './invalid-input.component.css'
})
export class InvalidInputComponent {
  hasError = false
  checkInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.hasError = value.trim() === '';
  }
}
