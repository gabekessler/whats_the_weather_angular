import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetForecastService {

  constructor() { }

  getForecast(): Observable<String> {
    const forecast =  of('Hey we got rain.');
    return forecast;
  }
}
