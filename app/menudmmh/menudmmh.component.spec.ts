import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudmmhComponent } from './menudmmh.component';

describe('MenudmmhComponent', () => {
  let component: MenudmmhComponent;
  let fixture: ComponentFixture<MenudmmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudmmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudmmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
