import {TestBed} from '@angular/core/testing';
import {RovStateService} from './rovstate.service';

describe('RovstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RovStateService = TestBed.get(RovStateService);
    expect(service).toBeTruthy();
  });
});
