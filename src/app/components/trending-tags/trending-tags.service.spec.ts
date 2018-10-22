import { TestBed } from '@angular/core/testing';

import { TrendingTagsService } from './trending-tags.service';

describe('TrendingTagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendingTagsService = TestBed.get(TrendingTagsService);
    expect(service).toBeTruthy();
  });
});
