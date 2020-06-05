import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level002Component } from './level002.component';

describe('Level002Component', () => {
  let component: Level002Component;
  let fixture: ComponentFixture<Level002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
