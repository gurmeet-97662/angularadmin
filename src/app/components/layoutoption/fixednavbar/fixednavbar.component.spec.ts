import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixednavbarComponent } from './fixednavbar.component';

describe('FixednavbarComponent', () => {
  let component: FixednavbarComponent;
  let fixture: ComponentFixture<FixednavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixednavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixednavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
