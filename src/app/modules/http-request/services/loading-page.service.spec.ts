import { async, inject, TestBed } from '@angular/core/testing';

import { LoadingPageService } from './loading-page.service';

describe('Service: LoadingPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingPageService]
    });
  });

  it('should ...', inject([LoadingPageService], (service: LoadingPageService) => {
    expect(service).toBeTruthy();
  }));
});
