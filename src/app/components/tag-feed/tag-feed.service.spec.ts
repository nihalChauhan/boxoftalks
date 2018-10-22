import { TestBed } from '@angular/core/testing';

import { TagFeedService } from './tag-feed.service';

describe('TagFeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagFeedService = TestBed.get(TagFeedService);
    expect(service).toBeTruthy();
  });
});
