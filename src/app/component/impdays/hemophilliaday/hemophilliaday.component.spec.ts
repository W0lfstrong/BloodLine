import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemophilliadayComponent } from './hemophilliaday.component';

describe('HemophilliadayComponent', () => {
  let component: HemophilliadayComponent;
  let fixture: ComponentFixture<HemophilliadayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemophilliadayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemophilliadayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
