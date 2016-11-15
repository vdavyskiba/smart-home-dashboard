import {Component, Input, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

const template = require('./structure.html');
const styles = require('./structure.css');

import Structure from '../../../model/nestdatamodel/structures/structure';
import WeatherComponent from '../weather/weather';
import ThermostatComponent from '../thermostat/thermostat';
import CameraComponent from '../camera/camera';
import AlarmComponent from '../alarm/alarm';
import NestStoreService from '../../../service/api/nest/nest-store';
import Thermostat from '../../../model/nestdatamodel/devices/thermostat/thermostat';
import Camera from '../../../model/nestdatamodel/devices/camera/camera';
import Alarm from '../../../model/nestdatamodel/devices/alarm/alarm';


@Component({
  selector: 'structure',
  template: template,
  styles: [styles],
  providers: [NestStoreService],
  directives: [
    WeatherComponent,
    StructureComponent,
    ThermostatComponent,
    CameraComponent,
    AlarmComponent,
  ]
})

export default class StructureComponent implements OnInit {

  @Input()
  model: Structure;

  thermostats: Observable<Thermostat[]>;

  cameras: Observable<Camera[]>;

  alarms: Observable<Alarm[]>;

  constructor(private service: NestStoreService) {}

  ngOnInit(): void {

    this.thermostats = this.service.getThermostats(this.model.structure_id);

    this.cameras = this.service.getCameras(this.model.structure_id);

    this.alarms = this.service.getAlarms(this.model.structure_id);

  }

}
