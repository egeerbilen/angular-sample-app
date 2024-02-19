import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterViewCheckedComponent } from './ng-after-view-checked.component';

describe('NgAfterViewCheckedComponent', () => {
  let component: NgAfterViewCheckedComponent;
  let fixture: ComponentFixture<NgAfterViewCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterViewCheckedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterViewCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
