import { Component } from '@angular/core';
import { ProductsComponent } from './components/exemplo-1/components/products/products.component';
import { ObservablesComponent } from "./components/exemplo-2/components/observables/observables.component";
import { SubjectComponent } from './components/exemplo-3/components/subject/subject.component';
import { BehaviourSubjectComponent } from './components/exemplo-4/components/behaviour-subject/behaviour-subject.component';
import { BehaviourContextComponent } from "./components/exemplo-5/components/behaviour-context/behaviour-context.component";

@Component({
  selector: 'app-root',
  imports: [
    ProductsComponent,
    ObservablesComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    BehaviourContextComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
