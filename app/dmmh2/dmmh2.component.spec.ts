import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dmmh2Component } from './dmmh2.component';

describe('Dmmh2Component', () => {
  let component: Dmmh2Component;
  let fixture: ComponentFixture<Dmmh2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dmmh2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dmmh2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
