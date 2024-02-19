import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CanActiveChildComponent } from './can-active-child.component';

describe('CanActiveChildComponent', () => {
  let component: CanActiveChildComponent;
  let fixture: ComponentFixture<CanActiveChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CanActiveChildComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanActiveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
