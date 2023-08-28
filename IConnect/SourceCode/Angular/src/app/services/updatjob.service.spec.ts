import { TestBed } from '@angular/core/testing';

import { UpdatjobService } from './updatjob.service';

describe('UpdatjobService', () => {
  let service: UpdatjobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatjobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
