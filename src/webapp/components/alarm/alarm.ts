import {Component, Input} from 'angular2/core';

const template = require('./alarm.html');
const styles = require('./alarm.css');

import Alarm from '../../../model/nestdatamodel/devices/alarm/alarm';

@Component({
  selector: 'alarm',
  template: template,
  styles: [styles]
})

export default class AlarmComponent {
  @Input()
  model: Alarm;

  @Input()
  where: string;

}
