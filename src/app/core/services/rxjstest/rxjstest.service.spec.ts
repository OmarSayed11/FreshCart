import { TestBed } from '@angular/core/testing';

import { RxjstestService } from './rxjstest.service';

describe('RxjstestService', () => {
  let service: RxjstestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjstestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
