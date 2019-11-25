import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dmmh3Component } from './dmmh3.component';

describe('Dmmh3Component', () => {
  let component: Dmmh3Component;
  let fixture: ComponentFixture<Dmmh3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dmmh3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dmmh3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
