import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalassemiadayComponent } from './thalassemiaday.component';

describe('ThalassemiadayComponent', () => {
  let component: ThalassemiadayComponent;
  let fixture: ComponentFixture<ThalassemiadayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThalassemiadayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThalassemiadayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
