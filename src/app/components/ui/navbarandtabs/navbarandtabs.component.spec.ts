import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarandtabsComponent } from './navbarandtabs.component';

describe('NavbarandtabsComponent', () => {
  let component: NavbarandtabsComponent;
  let fixture: ComponentFixture<NavbarandtabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarandtabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarandtabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
