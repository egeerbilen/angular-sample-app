/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgAfterContentInitChildComponent } from './ng-after-content-init-child.component';

describe('NgAfterContentInitChildComponent', () => {
  let component: NgAfterContentInitChildComponent;
  let fixture: ComponentFixture<NgAfterContentInitChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgAfterContentInitChildComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAfterContentInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
