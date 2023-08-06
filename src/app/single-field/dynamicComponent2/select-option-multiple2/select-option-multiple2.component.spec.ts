import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionMultiple2Component } from './select-option-multiple2.component';

describe('SelectOptionMultiple2Component', () => {
  let component: SelectOptionMultiple2Component;
  let fixture: ComponentFixture<SelectOptionMultiple2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOptionMultiple2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionMultiple2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
