import NestDataModel from '../../model/nestdatamodel/nest-data-model';
import Metadata from '../../model/nestdatamodel/metadata/metadata';
import Structure from '../../model/nestdatamodel/structures/structure';
import StringMap from '../../model/helpers/string-map';
import Device from '../../model/nestdatamodel/devices/device';

export default class NestDataModelImpl implements NestDataModel {
  metadata: Metadata;
  devices: StringMap<Device>;
  structures: StringMap<Structure>;
}
