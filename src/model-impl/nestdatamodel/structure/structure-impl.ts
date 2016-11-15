import Structure from '../../model/nestdatamodel/structure/structure';
import AwayStatus from '../../model/nestdatamodel/structure/enums/away-status';
import Eta from '../../model/nestdatamodel/structure/subtypes/eta';
import Where from '../../../model/nestdatamodel/structures/subtypes/where';
import StringMap from '../../../model/helpers/string-map';

export default class StructureImpl implements Structure{

  structure_id: string;
  thermostats: string[];
  smoke_co_alarms: string[];
  cameras: string[];
  away: AwayStatus;
  name: string;
  country_code: string;
  postal_code: string;
  peak_period_start_time: string;
  peak_period_end_time: string;
  time_zone: string;
  eta: Eta;
  rhr_enrollment: boolean;
  wheres: StringMap<Where>

}
