import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsandalertsComponent } from './modalsandalerts.component';

describe('ModalsandalertsComponent', () => {
  let component: ModalsandalertsComponent;
  let fixture: ComponentFixture<ModalsandalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsandalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsandalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
