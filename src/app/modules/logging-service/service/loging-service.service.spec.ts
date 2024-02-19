import { async, inject, TestBed } from '@angular/core/testing';

import { LogingServiceService } from './loging-service.service';

describe('Service: LogingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogingServiceService]
    });
  });

  it('should ...', inject([LogingServiceService], (service: LogingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
