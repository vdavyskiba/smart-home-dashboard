import AlarmState from './enums/alarm-state'; 
import BatteryHealth from './enums/battery-health';
import Device from '../device'; 

interface Alarm extends Device {
  device_id: string
  locale: string
  software_version: string
  structure_id: string
  name: string
  name_long: string
  last_connection: string
  is_online: boolean
  battery_health: BatteryHealth
  co_alarm_state: AlarmState
  smoke_alarm_state: AlarmState
  is_manual_test_active: boolean
  last_manual_test_time: string
  ui_color_state: any
  where_id: string
}

export default Alarm
