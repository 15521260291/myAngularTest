import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanContentComponent } from './boolean-content.component';

describe('BooleanContentComponent', () => {
  let component: BooleanContentComponent;
  let fixture: ComponentFixture<BooleanContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooleanContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
