import { Component } from '@angular/core';
import { WeatherService } from 'src/services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'barometro';
  data:any;
  press: number | undefined;
  degs = 0;

  constructor(private apiClima: WeatherService) {}

  ngOnInit() {
    this.apiClima.getWeather().subscribe(
      (res) => {
        console.log(res);
        this.data = res;        
        this.setData();
      },
      (err) => console.log(err)
    );
  }

  setData() {
    this.press = this.data.main.pressure;
    if (typeof this.press === 'number') {
      this.degs = (((((this.press - 930)*100)/120)*180)/100)+2.5;      
      console.log(this.degs);
    }
    
  }
}
