import {Component, OnInit, Input} from 'angular2/core';

const template = require('./thermostat.html');
const styles = require('./thermostat.css');

import Thermostat from '../../../model/nestdatamodel/devices/thermostat/thermostat';
import NestStoreService from '../../../service/api/nest/nest-store';

@Component({
  selector: 'thermostat',
  template: template,
  styles: [styles],
  providers: [ NestStoreService ]
})

export default class ThermostatComponent implements OnInit {

  @Input()
  model: Thermostat;

  @Input()
  where: string;

  constructor(private source: NestStoreService) {}

  ngOnInit(): void {

  }

  increaseTemp(): void {
    this.source.increaseTemp(this.model).then(null, (err) => console.error(err));
  }

  decreaseTemp(): void {
    this.source.decreaseTemp(this.model).then(null, (err) => console.error(err));
  }

}
