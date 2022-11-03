import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RealizationService } from './realization.service';

describe('RealizationService', () => {
  let service: RealizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        RouterTestingModule],
    });
    service = TestBed.inject(RealizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
