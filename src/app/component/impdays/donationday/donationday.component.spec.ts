import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationdayComponent } from './donationday.component';

describe('DonationdayComponent', () => {
  let component: DonationdayComponent;
  let fixture: ComponentFixture<DonationdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
