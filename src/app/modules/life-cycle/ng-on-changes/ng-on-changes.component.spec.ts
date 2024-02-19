/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgOnChangesComponent } from './ng-on-changes.component';
import { NgOnChangesChildComponent } from './ng-on-changes-child/ng-on-changes-child.component';

describe('NgOnChangesComponent', () => {
  let component: NgOnChangesComponent;
  let fixture: ComponentFixture<NgOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgOnChangesComponent, NgOnChangesChildComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
