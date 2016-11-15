import Device from '../../../model/nestdatamodel/devices/device';

export default class DeviceImpl implements Device {

  device_id: string;
  software_version: string;
  structure_id: string;
  where_id: string;
  name: string;
  name_long: string;
  is_online: boolean;

}
