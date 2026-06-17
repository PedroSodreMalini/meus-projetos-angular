import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-visibility',
  imports: [],
  templateUrl: './simple-visibility.component.html',
  styleUrl: './simple-visibility.component.css'
})
export class SimpleVisibilityComponent {
  isHidden = false
  toggleHidden() {
    this.isHidden = !this.isHidden
  }
}
