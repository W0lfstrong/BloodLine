import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationportalComponent } from './donationportal.component';

describe('DonationportalComponent', () => {
  let component: DonationportalComponent;
  let fixture: ComponentFixture<DonationportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
