import { TestBed } from '@angular/core/testing';

import { GlobalFeedService } from './global-feed.service';

describe('GlobalFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalFeedService = TestBed.get(GlobalFeedService);
    expect(service).toBeTruthy();
  });
});
