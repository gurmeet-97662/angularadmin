import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leve001Component } from './leve001.component';

describe('Leve001Component', () => {
  let component: Leve001Component;
  let fixture: ComponentFixture<Leve001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leve001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leve001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
