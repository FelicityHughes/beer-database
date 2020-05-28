import {HttpClient, HttpHandler} from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {BeerService} from './beer.service';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BeerService, HttpClient, HttpHandler]
  }));

  it('should be created', () => {
    const service: BeerService = TestBed.inject(BeerService);
    expect(service).toBeTruthy();
  });
});
