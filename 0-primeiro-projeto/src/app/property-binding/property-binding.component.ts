import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  texto = "Texto do input."
  inputType = "password"
  isDisabled = false

  public habilitar(){
    this.isDisabled = false;
  }

  public desabilitar(){
    this.isDisabled = true;
  }

  public alterarTextoDaVariavel(event : Event){
    const value = (event.target as HTMLInputElement).value
  
    this.texto = value
  }
}
