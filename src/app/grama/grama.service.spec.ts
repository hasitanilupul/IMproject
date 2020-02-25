import { TestBed } from '@angular/core/testing';

import { GramaService } from './grama.service';

describe('GramaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GramaService = TestBed.get(GramaService);
    expect(service).toBeTruthy();
  });
});
