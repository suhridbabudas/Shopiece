import { TestBed } from '@angular/core/testing';

import { IsInterceptorRequiredService } from './is-interceptor-required.service';

describe('IsInterceptorRequiredService', () => {
  let service: IsInterceptorRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsInterceptorRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
