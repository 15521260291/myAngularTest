import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerComponentComponent } from './drawer-component.component';

describe('DrawerComponentComponent', () => {
  let component: DrawerComponentComponent;
  let fixture: ComponentFixture<DrawerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
