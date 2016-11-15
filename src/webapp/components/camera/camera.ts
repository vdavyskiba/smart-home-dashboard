import {Component, Input} from 'angular2/core';

const template = require('./camera.html');
const styles = require('./camera.css');

import Camera from '../../../model/nestdatamodel/devices/camera/camera';


@Component({
  selector: 'camera',
  template: template,
  styles: [styles]
})

export default class CameraComponent {

  @Input()
  model: Camera;

  @Input()
  where: string;

  formatDate(date: string): string {
    return new Date(date).toLocaleString();
  }

}
