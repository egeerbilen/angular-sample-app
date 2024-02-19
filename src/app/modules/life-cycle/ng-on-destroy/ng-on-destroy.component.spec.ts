import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NgOnDestroyComponent } from './ng-on-destroy.component';

describe('NgOnDestroyComponent', () => {
  let component: NgOnDestroyComponent;
  let fixture: ComponentFixture<NgOnDestroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnDestroyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
