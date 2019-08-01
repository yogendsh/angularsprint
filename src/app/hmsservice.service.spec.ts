import { TestBed } from '@angular/core/testing';

import { HmsserviceService } from './hmsservice.service';

describe('HmsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmsserviceService = TestBed.get(HmsserviceService);
    expect(service).toBeTruthy();
  });
});
