import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarePopupComponent } from './square-popup.component';

describe('SquarePopupComponent', () => {
  let component: SquarePopupComponent;
  let fixture: ComponentFixture<SquarePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquarePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquarePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
