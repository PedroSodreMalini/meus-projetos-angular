import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCounterComponent } from './products-counter.component';

describe('ProductsCounterComponent', () => {
  let component: ProductsCounterComponent;
  let fixture: ComponentFixture<ProductsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
