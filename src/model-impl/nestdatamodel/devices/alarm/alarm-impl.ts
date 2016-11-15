import Alarm from '../../../../model/nestdatamodel/devices/alarm/alarm';
import BatteryHealth from '../../../../model/nestdatamodel/devices/alarm/enums/battery-health';
import AlarmState from '../../../../model/nestdatamodel/devices/alarm/enums/alarm-state';

export default class AlarmImpl implements Alarm {

  device_id: string;
  locale: string;
  software_version: string;
  structure_id: string;
  name: string;
  name_long: string;
  last_connection: string;
  is_online: boolean;
  battery_health: BatteryHealth;
  co_alarm_state: AlarmState;
  smoke_alarm_state: AlarmState;
  is_manual_test_active: boolean;
  last_manual_test_time: string;
  ui_color_state: any;
  where_id: string;

}
