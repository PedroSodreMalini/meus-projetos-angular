import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  onClick() {
    console.log("Clicou!")
  }

  onInput(event: Event) {
    console.log("Digitado!")

    const value = event.target as HTMLInputElement
    console.log(value.value)
  }
}
