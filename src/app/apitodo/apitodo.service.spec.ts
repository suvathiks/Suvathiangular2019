import { TestBed } from '@angular/core/testing';

import { ApitodoService } from './apitodo.service';

describe('ApitodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApitodoService = TestBed.get(ApitodoService);
    expect(service).toBeTruthy();
  });
});
