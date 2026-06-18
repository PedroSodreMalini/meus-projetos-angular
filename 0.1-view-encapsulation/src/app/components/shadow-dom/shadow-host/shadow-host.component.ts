import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-shadow-host',
  imports: [ChildComponent],
  templateUrl: './shadow-host.component.html',
  styleUrl: './shadow-host.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowHostComponent {

}
