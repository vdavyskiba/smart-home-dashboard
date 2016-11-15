import TemperatureScale from './enums/temperature'; 
import HVACMode from './enums/hvac-mode';
import HVACState from './enums/hvac-state';
import Device from '../device'; 

interface Thermostat extends Device {
  device_id: string
  locale: string
  software_version: string
  structure_id: string
  name: string
  name_long: string
  last_connection: string
  is_online: boolean
  can_cool: boolean
  can_heat: boolean
  is_using_emergency_heat: boolean
  has_fan: boolean
  fan_timer_active: boolean
  fan_timer_timeout: string
  has_leaf: boolean
  temperature_scale: TemperatureScale
  target_temperature_f: number
  target_temperature_c: number
  target_temperature_high_f: number
  target_temperature_high_c: number
  target_temperature_low_f: number
  target_temperature_low_c: number
  away_temperature_high_f: number
  away_temperature_high_c: number
  away_temperature_low_f: number
  away_temperature_low_c: number
  hvac_mode: HVACMode
  ambient_temperature_f: number
  ambient_temperature_c: number
  humidity: number
  hvac_state: HVACState
  where_id: string
}

export default Thermostat
