import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeWithNpmComponent } from './font-awesome-with-npm.component';

describe('FontAwesomeWithNpmComponent', () => {
  let component: FontAwesomeWithNpmComponent;
  let fixture: ComponentFixture<FontAwesomeWithNpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeWithNpmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontAwesomeWithNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
