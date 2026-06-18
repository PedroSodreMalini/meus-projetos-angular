import { Component } from '@angular/core';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ShadowHostComponent } from './components/shadow-dom/shadow-host/shadow-host.component';

@Component({
  selector: 'app-root',
  imports: [
    UserDetailComponent,
    ProductCardComponent,
    ShadowHostComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '0.1-view-encapsulation';
}
