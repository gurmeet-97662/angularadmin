import { TestBed } from '@angular/core/testing';

import { ValidateAuthGuard } from './validate-auth.guard';

describe('ValidateAuthGuard', () => {
  let guard: ValidateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
