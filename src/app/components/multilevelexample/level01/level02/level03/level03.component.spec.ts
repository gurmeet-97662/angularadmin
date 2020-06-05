import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level03Component } from './level03.component';

describe('Level03Component', () => {
  let component: Level03Component;
  let fixture: ComponentFixture<Level03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
