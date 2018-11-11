import { TestBed } from '@angular/core/testing';

import { ServicesSectionService } from './services-section.service';

describe('ServicesSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesSectionService = TestBed.get(ServicesSectionService);
    expect(service).toBeTruthy();
  });
});
