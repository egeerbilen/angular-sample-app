import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgAfterContentInitComponent } from './ng-after-content-init.component';

describe('NgAfterContentInitComponent', () => {
  let component: NgAfterContentInitComponent;
  let fixture: ComponentFixture<NgAfterContentInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterContentInitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterContentInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
