import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "https://api.weatherapi.com/v1/current.json"
  private apiKey = "0a13e0bf903f4143add111820242607"
  constructor(private _http: HttpClient) { }
  getData (city: string): Observable<Weather>{
    return this._http.get<Weather>(`${this.apiUrl}?key=${this.apiKey}&q=${city}`)
  }
}
