import AwayStatus from './enums/away-status';
import Eta from './subtypes/eta';
import Where from './subtypes/where';
import StringMap from '../../helpers/string-map';

interface Structure {
  structure_id: string
  thermostats: string[]
  smoke_co_alarms: string[]
  cameras: string[]
  away: AwayStatus
  name: string
  country_code: string
  postal_code: string
  peak_period_start_time: string
  peak_period_end_time: string
  time_zone: string
  eta: Eta
  rhr_enrollment: boolean
  wheres: StringMap<Where>
}

export default Structure;
