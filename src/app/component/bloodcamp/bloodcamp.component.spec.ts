import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodcampComponent } from './bloodcamp.component';

describe('BloodcampComponent', () => {
  let component: BloodcampComponent;
  let fixture: ComponentFixture<BloodcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
