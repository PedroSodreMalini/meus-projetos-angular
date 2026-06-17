import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicTextComponent } from './dinamic-text.component';

describe('DinamicTextComponent', () => {
  let component: DinamicTextComponent;
  let fixture: ComponentFixture<DinamicTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinamicTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinamicTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
