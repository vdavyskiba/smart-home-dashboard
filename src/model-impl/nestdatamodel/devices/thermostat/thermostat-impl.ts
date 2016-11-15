import Thermostat from '../../../../model/nestdatamodel/devices/thermostat/thermostat';
import TemperatureScale from '../../../../model/nestdatamodel/devices/thermostat/enums/temperature';
import HVACMode from '../../../../model/nestdatamodel/devices/thermostat/enums/hvac-mode';
import HVACState from '../../../../model/nestdatamodel/devices/thermostat/enums/hvac-state';

export default class ThermostatImpl implements Thermostat {

  device_id: string;
  locale: string;
  software_version: string;
  structure_id: string;
  name: string;
  name_long: string;
  last_connection: string;
  is_online: boolean;
  can_cool: boolean;
  can_heat: boolean;
  is_using_emergency_heat: boolean;
  has_fan: boolean;
  fan_timer_active: boolean;
  fan_timer_timeout: string;
  has_leaf: boolean;
  temperature_scale: TemperatureScale;
  target_temperature_f: number;
  target_temperature_c: number;
  target_temperature_high_f: number;
  target_temperature_high_c: number;
  target_temperature_low_f: number;
  target_temperature_low_c: number;
  away_temperature_high_f: number;
  away_temperature_high_c: number;
  away_temperature_low_f: number;
  away_temperature_low_c: number;
  hvac_mode: HVACMode;
  ambient_temperature_f: number;
  ambient_temperature_c: number;
  humidity: number;
  hvac_state: HVACState;
  where_id: string;

}
