import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { HttpRequestService } from './http-request.service';

describe('Service: HttpRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpRequestService]
    });
  });

  it('should ...', inject([HttpRequestService], (service: HttpRequestService) => {
    expect(service).toBeTruthy();
  }));
});
