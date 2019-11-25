import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableftComponent } from './tableft.component';

describe('TableftComponent', () => {
  let component: TableftComponent;
  let fixture: ComponentFixture<TableftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
