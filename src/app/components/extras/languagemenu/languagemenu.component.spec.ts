import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagemenuComponent } from './languagemenu.component';

describe('LanguagemenuComponent', () => {
  let component: LanguagemenuComponent;
  let fixture: ComponentFixture<LanguagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
