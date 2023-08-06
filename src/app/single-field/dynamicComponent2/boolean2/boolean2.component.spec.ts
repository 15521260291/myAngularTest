import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boolean2Component } from './boolean2.component';

describe('Boolean2Component', () => {
  let component: Boolean2Component;
  let fixture: ComponentFixture<Boolean2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boolean2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boolean2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
