import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { UrlGetIdComponent } from './url-get-id.component';

describe('UrlGetIdComponent', () => {
  let component: UrlGetIdComponent;
  let fixture: ComponentFixture<UrlGetIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlGetIdComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: {
              subscribe: (fn: (value: any) => void) => fn({ id: 'sample_id', name: 'sample_name' })
            },
            queryParams: {
              subscribe: (fn: (value: any) => void) => fn({ surname: 'sample_surname' })
            },
            fragment: {
              subscribe: (fn: (value: any) => void) => fn('sample_fragment')
            },
            snapshot: {
              paramMap: convertToParamMap({ id: 'sample_id', name: 'sample_name' }),
              queryParamMap: convertToParamMap({ surname: 'sample_surname' })
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlGetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more specific tests based on your component's functionality
});
