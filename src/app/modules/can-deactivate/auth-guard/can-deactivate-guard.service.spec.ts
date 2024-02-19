import { async, inject, TestBed } from '@angular/core/testing';

import { CanDeactivateGuardService } from './can-deactivate-guard.service';

describe('Service: CanDeactiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateGuardService]
    });
  });

  it('should ...', inject([CanDeactivateGuardService], (service: CanDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
