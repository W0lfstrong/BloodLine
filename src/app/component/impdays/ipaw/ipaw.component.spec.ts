import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpawComponent } from './ipaw.component';

describe('IpawComponent', () => {
  let component: IpawComponent;
  let fixture: ComponentFixture<IpawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
