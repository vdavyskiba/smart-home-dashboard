const Firebase = require('firebase');
const Cookies = require('js-cookie');
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import Constants from '../../../constants/constants';
import NestDataModel from '../../../model/nestdatamodel/nest-data-model';
import Structure from '../../../model/nestdatamodel/structures/structure';
import Thermostat from '../../../model/nestdatamodel/devices/thermostat/thermostat';
import Camera from '../../../model/nestdatamodel/devices/camera/camera';
import Alarm from '../../../model/nestdatamodel/devices/alarm/alarm';
import {observable} from '../../util/observable-firebase';
import {
  obtainStructure, obtainThermostat, obtainAlarm, obtainCamera,
  obtainStructures, obtainThermostats, obtainAlarms, obtainCameras
} from '../../util/nest-data-model-utils';

@Injectable()
export default class NestStoreService {

  private static source: Firebase;

  private static initSource(): Firebase {

    const token = Cookies.get(Constants.cookie_token);

    let source = new Firebase(Constants.nest_firebase_endpoint);

    source.authWithCustomToken(token);

    return source;
  }

  constructor() {

    NestStoreService.source = NestStoreService.source || NestStoreService.initSource();

  }

  getStatus(): Observable<boolean> {

    return observable(NestStoreService.source.child('.info/connected'));

  }

  getStructuresIds(): Observable<string[]> {

    return this.getModel<string[]>((model: NestDataModel): string[] => Object.keys(model.structures));

  }

  getStructures(): Observable<Structure[]> {

    return this.getModel<Structure[]>(obtainStructures());

  }

  getStructure(structureId: string): Observable<Structure> {

    return this.getModel<Structure>(obtainStructure(structureId));

  }

  getThermostats(structureId: string): Observable<Thermostat[]> {

    return this.getModel<Thermostat[]>(obtainThermostats(structureId));

  }

  getCameras(structureId: string): Observable<Camera[]> {

    return this.getModel<Camera[]>(obtainCameras(structureId));

  }

  getAlarms(structureId: string): Observable<Alarm[]> {

    return this.getModel<Alarm[]>(obtainAlarms(structureId));

  }

  getThermostat(deviceId: string): Observable<Thermostat> {

    return this.getModel<Thermostat>(obtainThermostat(deviceId));

  }

  increaseTemp(thermostat: Thermostat): Promise<void> {

    let path: string = ['devices', 'thermostats', thermostat.device_id, 'target_temperature_f'].join('/');

    return this.storeData(path, thermostat.target_temperature_f + 1);
  }

  decreaseTemp(thermostat: Thermostat): Promise<void> {

    let path: string = ['devices', 'thermostats', thermostat.device_id, 'target_temperature_f'].join('/');

    return this.storeData(path, thermostat.target_temperature_f - 1);
  }

  getAlarm(deviceId: string): Observable<Alarm> {

    return this.getModel<Alarm>(obtainAlarm(deviceId));

  }

  getCamera(deviceId: string): Observable<Camera> {

    return this.getModel<Camera>(obtainCamera(deviceId));

  }

  private storeData(path: string, value: any): Promise<void> {

    return NestStoreService.source.child(path).set(value);

  }

  private getModel<T>(mapper: (model: NestDataModel) => T): Observable<T> {

    return observable(NestStoreService.source).map((model: NestDataModel): T => mapper(model));

  }

}
