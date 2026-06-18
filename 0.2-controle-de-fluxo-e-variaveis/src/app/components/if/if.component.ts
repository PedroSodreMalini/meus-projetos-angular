import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
  userRole = 'user';
  setUserRole(role: string) {
    this.userRole = role;
  }
}
