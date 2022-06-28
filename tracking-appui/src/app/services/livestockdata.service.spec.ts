import { TestBed } from '@angular/core/testing';

import { LivestockdataService } from './livestockdata.service';

describe('LivestockdataService', () => {
  let service: LivestockdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivestockdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
