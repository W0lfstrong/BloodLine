import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthdayComponent } from './healthday.component';

describe('HealthdayComponent', () => {
  let component: HealthdayComponent;
  let fixture: ComponentFixture<HealthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
