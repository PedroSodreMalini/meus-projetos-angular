import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratandoSvgComponent } from './tratando-svg.component';

describe('TratandoSvgComponent', () => {
  let component: TratandoSvgComponent;
  let fixture: ComponentFixture<TratandoSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratandoSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratandoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
