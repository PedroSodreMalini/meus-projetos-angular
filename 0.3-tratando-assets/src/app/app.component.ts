import { Component } from '@angular/core';
import { TratandoImagensComponent } from './components/tratando-imagens/tratando-imagens.component';
import { TratandoSvgComponent } from './components/tratando-svg/tratando-svg.component';
import { FontAwesomeCdnComponent } from './components/font-awesome-cdn/font-awesome-cdn.component';
import { FontAwesomeWithNpmComponent } from './components/font-awesome-with-npm/font-awesome-with-npm.component';
import { GoogleFontsComponent } from './components/google-fonts/google-fonts.component';

@Component({
  selector: 'app-root',
  imports: [
    TratandoImagensComponent,
    TratandoSvgComponent,
    FontAwesomeCdnComponent,
    FontAwesomeWithNpmComponent,
    GoogleFontsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '0.3-tratando-assets';
}
