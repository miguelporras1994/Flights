import { TestBed } from '@angular/core/testing';

import { Flights.ServicesService } from './flights.services.service';

describe('Flights.ServicesService', () => {
  let service: Flights.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flights.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
