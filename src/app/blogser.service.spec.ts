import { TestBed } from '@angular/core/testing';

import { BlogserService } from './blogser.service';

describe('BlogserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogserService = TestBed.get(BlogserService);
    expect(service).toBeTruthy();
  });
});
