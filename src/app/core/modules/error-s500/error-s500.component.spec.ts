import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorS500Component } from './error-s500.component';

describe('ErrorS500Component', () => {
  let component: ErrorS500Component;
  let fixture: ComponentFixture<ErrorS500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorS500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorS500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
