import { TestBed } from '@angular/core/testing';

import { FilterResService } from './filter-res.service';

describe('FilterResService', () => {
  let service: FilterResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
