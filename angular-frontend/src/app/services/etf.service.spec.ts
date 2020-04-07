import { TestBed, inject } from '@angular/core/testing';

import { EtfService } from './etf.service';

describe('EtfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtfService]
    });
  });

  it('should be created', inject([EtfService], (service: EtfService) => {
    expect(service).toBeTruthy();
  }));
});
