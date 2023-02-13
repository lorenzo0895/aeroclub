import { TestBed } from '@angular/core/testing';

import { MetarService } from './metar.service';

describe('MetarService', () => {
  let service: MetarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
