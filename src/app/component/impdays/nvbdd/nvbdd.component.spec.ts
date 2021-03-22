import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvbddComponent } from './nvbdd.component';

describe('NvbddComponent', () => {
  let component: NvbddComponent;
  let fixture: ComponentFixture<NvbddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvbddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NvbddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
