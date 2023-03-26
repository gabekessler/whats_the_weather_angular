import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GetForecastService } from './get-forecast.service';
import { Data } from '@angular/router';

describe('GetForecastService', () => {
  let service: GetForecastService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GetForecastService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('gets a temperature and forecast with a good address', () => {
    const weatherData: Data = {name: 'Test Data'};
  });

  it('#getForecast should return a forecast if good address',
    (done: DoneFn) => {
    service.getForecast().subscribe(value => {
      expect(value).toBe('Hey we got rain.');
      done();
    });
  });

  it('#getForecast should return an error message is there is a bad address',
    (done: DoneFn) => {
    service.getForecast().subscribe(value => {
      expect(value).toBe('Hey we got rain.');
      done();
    });
  });
});
