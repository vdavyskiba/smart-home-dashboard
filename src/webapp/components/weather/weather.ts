import {Component, OnInit, Input} from 'angular2/core';

const template = require('./weather.html');
const styles = require('./weather.css');

import WeatherModel from '../../../model/weather/weater-model';
import WeatherService from '../../../service/api/firebase/weather';
import LocationService from '../../../service/api/location/location';
import NestStoreService from '../../../service/api/nest/nest-store';

@Component({
  selector: 'weather',
  template: template,
  styles: [styles],
  providers: [ WeatherService, LocationService, NestStoreService ]
})

export default class WeatherComponent implements OnInit {

  @Input()
  structureid: string;

  model: WeatherModel;

  constructor(private source: WeatherService) {}

  ngOnInit(): void {

    this.source.getCurrent(this.structureid).subscribe((data: WeatherModel) => this.model = data);

  }

}
