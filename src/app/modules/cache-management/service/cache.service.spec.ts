import { inject, TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';

describe('Service: CacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheService]
    });
  });

  it('should ...', inject([CacheService], (service: CacheService) => {
    expect(service).toBeTruthy();
  }));
});
