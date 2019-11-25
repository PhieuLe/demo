import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmmhComponent } from './dmmh.component';

describe('DmmhComponent', () => {
  let component: DmmhComponent;
  let fixture: ComponentFixture<DmmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
