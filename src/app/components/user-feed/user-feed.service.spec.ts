import { TestBed } from '@angular/core/testing';

import { UserFeedService } from './user-feed.service';

describe('UserFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFeedService = TestBed.get(UserFeedService);
    expect(service).toBeTruthy();
  });
});
