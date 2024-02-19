import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgOnInitComponent } from './ng-on-init.component';

describe('NgOnInitComponent', () => {
  let component: NgOnInitComponent;
  let fixture: ComponentFixture<NgOnInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnInitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
