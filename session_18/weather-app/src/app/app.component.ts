import { Component } from '@angular/core';
import { WeatherService } from './shared/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisiable = false;
  temp!: number;
  humidity!: number;
  description!: string;
  inputText: string= "";
  name!:string;

  constructor(private weatherService: WeatherService) {}

  fetchData(): void {
    this.weatherService.getData(this.inputText).subscribe({
      next: (response) => {
        const {location: {name}, current: { temp_c: temp, condition: { text: description }, humidity }} = response;
        this.temp = temp;
        this.description = description;
        this.humidity = humidity;
        this.name = name;
        this.isVisiable = true;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
