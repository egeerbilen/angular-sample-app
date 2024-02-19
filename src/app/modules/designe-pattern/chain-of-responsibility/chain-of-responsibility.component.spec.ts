import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { ChainOfResponsibilityComponent } from './chain-of-responsibility.component';

describe('ChainOfResponsibilityComponent', () => {
  let component: ChainOfResponsibilityComponent;
  let fixture: ComponentFixture<ChainOfResponsibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HighlightModule],
      declarations: [ChainOfResponsibilityComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainOfResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
