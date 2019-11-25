import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dmmh1Component } from './dmmh1.component';

describe('Dmmh1Component', () => {
  let component: Dmmh1Component;
  let fixture: ComponentFixture<Dmmh1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dmmh1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dmmh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
