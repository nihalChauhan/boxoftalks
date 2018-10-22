import { TestBed } from '@angular/core/testing';

import { EditArticleService } from './edit-article.service';

describe('EditArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditArticleService = TestBed.get(EditArticleService);
    expect(service).toBeTruthy();
  });
});
