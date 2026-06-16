import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFlatComponent } from './botao-flat.component';

describe('BotaoFlatComponent', () => {
  let component: BotaoFlatComponent;
  let fixture: ComponentFixture<BotaoFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoFlatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
