import Metadata from './metadata/metadata';
import Structure from './structures/structure';
import StringMap from '../helpers/string-map';
import Device from './devices/device';

interface NestDataModel {
  metadata: Metadata
  devices: StringMap<Device>
  structures: StringMap<Structure>
}

export default NestDataModel
