import { TestBed } from '@angular/core/testing';

import { AuthNgrxService } from './auth-ngrx.service';

describe('AuthNgrxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthNgrxService = TestBed.get(AuthNgrxService);
    expect(service).toBeTruthy();
  });
});
