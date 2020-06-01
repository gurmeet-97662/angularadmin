import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavigationsidebarComponent } from './topnavigationsidebar.component';

describe('TopnavigationsidebarComponent', () => {
  let component: TopnavigationsidebarComponent;
  let fixture: ComponentFixture<TopnavigationsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigationsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigationsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
