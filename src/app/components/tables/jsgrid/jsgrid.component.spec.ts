import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsgridComponent } from './jsgrid.component';

describe('JsgridComponent', () => {
  let component: JsgridComponent;
  let fixture: ComponentFixture<JsgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
