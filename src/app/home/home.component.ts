import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = "http://api.weatherapi.com/v1/current.json?key=c5c7526157da4a01893163034230808&q=London&aqi=no";
  info:WeatherModel = {};

  constructor(private _http: HttpClient){}

  ngOnInit(): void {
    this._http.get(this.url).subscribe(data => {
      this.info = data as WeatherModel;
    })
  }

}

export interface WeatherModel {
  current?:any,
  location?:any
}
