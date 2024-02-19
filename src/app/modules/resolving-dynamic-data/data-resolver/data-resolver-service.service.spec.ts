import { HttpClientModule } from '@angular/common/http';
import { async, inject, TestBed } from '@angular/core/testing';

import { DataResolverServiceService } from './data-resolver-service.service';

describe('Service: DataResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DataResolverServiceService]
    });
  });

  it('should ...', inject([DataResolverServiceService], (service: DataResolverServiceService) => {
    expect(service).toBeTruthy();
  }));
});
