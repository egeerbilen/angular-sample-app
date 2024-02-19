import { async, inject, TestBed } from '@angular/core/testing';

import { SessionstorageService } from './session-storage.service';

describe('Service: Sessionstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionstorageService]
    });
  });

  it('should ...', inject([SessionstorageService], (service: SessionstorageService) => {
    expect(service).toBeTruthy();
  }));
});
