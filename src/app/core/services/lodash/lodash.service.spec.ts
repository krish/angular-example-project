import { TestBed } from '@angular/core/testing';

import { LodashService } from './lodash.service';

describe('LodashService', () => {
  let service: LodashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
