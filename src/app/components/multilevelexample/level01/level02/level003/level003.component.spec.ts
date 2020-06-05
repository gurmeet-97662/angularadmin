import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level003Component } from './level003.component';

describe('Level003Component', () => {
  let component: Level003Component;
  let fixture: ComponentFixture<Level003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
