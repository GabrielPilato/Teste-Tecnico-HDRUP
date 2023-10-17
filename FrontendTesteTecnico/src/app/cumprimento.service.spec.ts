import { TestBed } from '@angular/core/testing';

import { CumprimentoService } from './cumprimento.service';

describe('CumprimentoService', () => {
  let service: CumprimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CumprimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
