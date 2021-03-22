import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgcampComponent } from './orgcamp.component';

describe('OrgcampComponent', () => {
  let component: OrgcampComponent;
  let fixture: ComponentFixture<OrgcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgcampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
