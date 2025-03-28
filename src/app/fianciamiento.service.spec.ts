import { TestBed } from '@angular/core/testing';

import { FianciamientoService } from './fianciamiento.service';

describe('FianciamientoService', () => {
  let service: FianciamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FianciamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
