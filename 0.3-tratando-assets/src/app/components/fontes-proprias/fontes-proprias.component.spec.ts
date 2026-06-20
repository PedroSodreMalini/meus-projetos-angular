import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontesPropriasComponent } from './fontes-proprias.component';

describe('FontesPropriasComponent', () => {
  let component: FontesPropriasComponent;
  let fixture: ComponentFixture<FontesPropriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontesPropriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontesPropriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
