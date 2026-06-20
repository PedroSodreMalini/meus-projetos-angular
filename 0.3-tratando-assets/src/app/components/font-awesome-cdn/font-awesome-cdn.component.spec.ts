import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeCdnComponent } from './font-awesome-cdn.component';

describe('FontAwesomeCdnComponent', () => {
  let component: FontAwesomeCdnComponent;
  let fixture: ComponentFixture<FontAwesomeCdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeCdnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontAwesomeCdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
