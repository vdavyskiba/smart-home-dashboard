import NestDataModel from '../../model/nestdatamodel/nest-data-model';
import Structure from '../../model/nestdatamodel/structures/structure';
import Thermostat from '../../model/nestdatamodel/devices/thermostat/thermostat';
import Alarm from '../../model/nestdatamodel/devices/alarm/alarm';
import Camera from '../../model/nestdatamodel/devices/camera/camera';
import Devices from '../../model/nestdatamodel/enums/devices';
import Device from '../../model/nestdatamodel/devices/device';


export function obtainStructures(): (model: NestDataModel) => Structure[] {

  return (model: NestDataModel) => Object.keys(model.structures).map(key => model.structures[key]);

}

export function obtainStructure(structureId: string): (model: NestDataModel) => Structure {

  return (model: NestDataModel) => model.structures[structureId];

}

export function obtainThermostat(deviceId: string): (model: NestDataModel) => Thermostat {

  return obtainDeviceByType<Thermostat>(Devices.thermostats, deviceId);

}

export function obtainAlarm(deviceId: string): (model: NestDataModel) => Alarm {

  return obtainDeviceByType<Alarm>(Devices.smoke_co_alarms, deviceId);

}

export function obtainCamera(deviceId: string): (model: NestDataModel) => Camera {

  return obtainDeviceByType<Camera>(Devices.cameras, deviceId);

}

export function obtainDeviceByType<T>(type: Devices, id: string): (model: NestDataModel) => T {
  return (model: NestDataModel) => model.devices[type][id];
}

export function obtainThermostats(structureId: string): (model: NestDataModel) => Thermostat[] {

  return obtainDevices<Thermostat>(structureId, Devices.thermostats);

}

export function obtainAlarms(structureId: string): (model: NestDataModel) => Alarm[] {

  return obtainDevices<Alarm>(structureId, Devices.smoke_co_alarms);

}

export function obtainCameras(structureId: string): (model: NestDataModel) => Camera[] {

  return obtainDevices<Camera>(structureId, Devices.cameras);

}

export function obtainDevices<T extends Device>(structureId: string, type: Devices): (model: NestDataModel) => T[] {

  return (model: NestDataModel) => {

    let deviceType: string = Devices[type];

    let deviceIds: string[] = model.structures[structureId][deviceType];

    return deviceIds.map(id => model.devices[deviceType][id]);

  };

}
