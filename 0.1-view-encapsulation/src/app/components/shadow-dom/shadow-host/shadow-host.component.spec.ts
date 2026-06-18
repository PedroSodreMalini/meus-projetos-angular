import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowHostComponent } from './shadow-host.component';

describe('ShadowHostComponent', () => {
  let component: ShadowHostComponent;
  let fixture: ComponentFixture<ShadowHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShadowHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
