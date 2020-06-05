import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level0001Component } from './level0001.component';

describe('Level0001Component', () => {
  let component: Level0001Component;
  let fixture: ComponentFixture<Level0001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level0001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level0001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
