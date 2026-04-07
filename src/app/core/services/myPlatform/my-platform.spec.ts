import { TestBed } from '@angular/core/testing';

import { MyPlatform } from './my-platform';

describe('MyPlatform', () => {
  let service: MyPlatform;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlatform);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
