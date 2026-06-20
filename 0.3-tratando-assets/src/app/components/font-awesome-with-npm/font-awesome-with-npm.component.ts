import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { faCoffee, faBell } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-font-awesome-with-npm',
  imports: [FontAwesomeModule],
  templateUrl: './font-awesome-with-npm.component.html',
  styleUrl: './font-awesome-with-npm.component.css'
})
export class FontAwesomeWithNpmComponent {
  faCoffee = faCoffee
  faBell = faBell
}
