import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleVisibilityComponent } from './simple-visibility.component';

describe('SimpleVisibilityComponent', () => {
  let component: SimpleVisibilityComponent;
  let fixture: ComponentFixture<SimpleVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleVisibilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
