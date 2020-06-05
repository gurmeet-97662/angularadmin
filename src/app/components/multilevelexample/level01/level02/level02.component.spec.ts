import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level02Component } from './level02.component';

describe('Level02Component', () => {
  let component: Level02Component;
  let fixture: ComponentFixture<Level02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
