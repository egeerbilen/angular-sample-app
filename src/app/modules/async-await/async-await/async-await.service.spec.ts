import { async, inject, TestBed } from '@angular/core/testing';

import { AsyncAwaitService } from './async-await.service';

describe('Service: AsyncAwait', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncAwaitService]
    });
  });

  it('should ...', inject([AsyncAwaitService], (service: AsyncAwaitService) => {
    expect(service).toBeTruthy();
  }));
});
